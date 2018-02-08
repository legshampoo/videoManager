const ShortUniqueId = require('short-unique-id');
const idLength = 8;
const mongoose = require('mongoose');
const Device = mongoose.model('Device');

var deviceController = {

  registerDevice(req, res){
    console.log('/request-new-uuid');

    var shortId = new ShortUniqueId();

    var uuid = shortId.randomUUID(idLength);

    console.log('NEW Device UUID: ', uuid);

    var response = {
      uuid: uuid
    }

    return res.send(response);
  },

  checkUUIDExists(req, res){
    console.log('check uuid exists');
    console.log('BODY: ', req.body);

    Device.find({
      uuid: req.body.uuid
    })
    .then(devices => {
      console.log('find uuid res: ', devices);
      if(devices.length === undefined || devices.length < 1){
        console.log('does not exist');
        var payload = {
          device_found: false
        }

        res.send(payload);
      }else{
        if(devices[0].uuid === req.body.uuid){
          var payload = {
            device_found: true,
            uuid: devices[0].uuid
          }

          res.send(payload);
        }else{
          var payload = {
            device_found: false
          }

          res.send(payload);
        }

      }
    })
    .catch(err => {
      console.log(err);
    })

    // return res.send('yay');
  },

  getDeviceInfo(req, res) {
    console.log('device get device info');
    console.log(req.body);

    Device.find({
      uuid: req.body.uuid
    })
    .then(device => {
      console.log('found device: ');
      console.log(device);

      var payload = {
        data: device[0]
      }

      res.send(payload);
    })
  }
}

module.exports = deviceController;
