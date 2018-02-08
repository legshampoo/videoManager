export const HEARTBEAT = 'server/device-heartbeat';
export const SEND_DEVICE_REFRESH = 'server/device-refresh';
export const JOIN_ROOM = 'server/join-room';

export function emitHeartbeat(values){
  console.log('DISPATCH: ', HEARTBEAT);

  return {
    type: HEARTBEAT,
    payload: values
  }
}

export function sendDeviceRefresh(values){
  console.log('DISPATCH: ', SEND_DEVICE_REFRESH);

  return {
    type: SEND_DEVICE_REFRESH,
    payload: values
  }
}

export function joinRoom(values){
  console.log('DISPATCH: ', JOIN_ROOM);

  return {
    type: JOIN_ROOM,
    payload: values
  }
}
