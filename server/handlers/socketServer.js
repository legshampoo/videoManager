const moment_timezone = require('moment-timezone');

var connections = [];

var socketServer = {
  heartbeatTimer: {},

  init: (io) => {
    console.log('Socket Server started');

    io.on('connection', (socket) => {
      connections.push(socket);

      var socketIp = socket.handshake.address; //this is actually incorrect

      console.log('SOCKET: new connection from ' + socketIp + ', socket ID: ' + socket.id);

      socket.on('action', async (action) => {
        if(action.type === 'server/device-heartbeat'){
          // console.log('got a heartbeat', action.payload);
          var room = action.payload.owner_id;
          var localTimeNow = moment_timezone().tz('America/New_York').format('YYYY-MM-DD HH:mm:ss');
          socket.emit('action', {
            type: 'server-heartbeat',
            payload: {
              message: 'server heartbeat',
              status: 'alive',
              time: localTimeNow
            }
          });

          io.to(room).emit('action', {
            type: 'device-heartbeat',
            payload: {
              device_id: action.payload.device_id,
              status: action.payload.status
            }})

          socket.device_id = action.payload.device_id;
          socket.owner_id = action.payload.owner_id;
          socket.last_heartbeat = localTimeNow;

          clearTimeout(this.heartbeatTimer);
          socketServer.restartHeartbeatTimer(io, socket);
        }

        if(action.type === 'server/device-refresh') {
          console.log('SOCKET GOT A REFRESH YALL');
          console.log(action.payload);

          connections.forEach(c => {
            if(c.device_id === undefined){return};
            if(action.payload.device_id === c.device_id){
              console.log('send refresh to: ', c.device_id);
              var payload = {
                time: Date.now()
              };

              c.emit('action', {
                type: 'refresh',
                payload: payload
              });
            }
          })
        }

        if(action.type === 'server/device-restart'){
          console.log('SOCKET GOT A DEVICE RESTART');
          console.log(action.payload);

          connections.forEach(c => {
            if(c.device_id === undefined){return};
            if(action.payload.device_id === c.device_id){
              console.log('send restart to: ', c.device_id);
              var payload = {
                time: Date.now()
              }

              c.emit('action', {
                type: 'restart',
                payload: payload
              })
            }
          })
        }

        if(action.type === 'server/push-device-content'){
          console.log('SOCKET: Received push-device-content');
          console.log(action.payload);

          connections.forEach(c => {
            if(c.device_id === undefined){return};
            if(action.payload.device_id === c.device_id){
              console.log('Push content to: ', c.device_id);

              c.emit('action', {
                type: 'push-device-content',
                payload: action.payload
              })
            }
          })
        }

        if(action.type === 'server/join-room'){
          var room = action.payload.owner_id;
          var user = action.payload.device_id;
          console.log(user + ' Joined');
          console.log('Room: ', room);

          socket.room = room;
          socket.join(room);
        }
      })
    })

    io.on('disconnect', () => {
      console.log('SOCKET: disconnected', socket.id);
    })

  },

  restartHeartbeatTimer: (io, sock) => {
    // console.log(sock.id + ' timer restarted');
    // console.log('socket: ', sock.id);
    this.heartbeatTimer = setTimeout(() => {
      console.log('HEARTBEAT TIMER EXPIRED: ' + sock.id + ' declare dead');
      const room = sock.owner_id;
      const device_id = sock.device_id;

      io.to(room).emit('action', {
        type: 'device-heartbeat-dead',
        payload: {
          owner_id: sock.owner_id,
          device_id: sock.device_id,
          last_heartbeat: sock.last_heartbeat,
          status: 'dead'
        }})
      }, 10000);
    }
}

// var heartbeatTimer;

module.exports = socketServer;
