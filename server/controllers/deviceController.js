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
