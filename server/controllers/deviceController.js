const ShortUniqueId = require('short-unique-id');
const idLength = 8;

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

  }


}

module.exports = deviceController;
