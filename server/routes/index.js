const express = require('express');
const router = express.Router();

const deviceController = require('../controllers/deviceController');

router.post('/assign-device-uuid', deviceController.registerDevice);
// router.post('/register-device', function(req, res){
//   console.log('here');
// })

module.exports = router;
