const express = require('express');
const router = express.Router();

const deviceController = require('../controllers/deviceController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const uploadController = require('../controllers/uploadController');

router.post('/device/request-new-uuid', deviceController.registerDevice);

router.post('/device/get-device-info',
  deviceController.getDeviceInfo
);

router.post('/device/check-uuid-exists',
  deviceController.checkUUIDExists
);

router.post('/user/login',
  authController.authenticate,
  userController.login
);

router.post('/user/logout',
  userController.logout
);

router.post('/user/register',
  userController.validateRegisterUser,
  userController.registerUser,
  authController.authenticate,
  userController.login
);

// router.post('/user/upload/video',
//   userController.uploadVideo
// );

router.post('/user/upload/video',
  uploadController.uploadVideo
);

router.post('/user/add-device',
  userController.addDevice
);

router.post('/user/get-devices',
  userController.getDevices
);

router.post('/user/get-device-info',
  userController.getDeviceInfo
);

router.post('/user/get-user-media',
  userController.getUserMedia
);

router.post('/user/update-device',
  userController.updateDevice
);

// router.post('/user/delete-content',
//   uploadController.deleteContent
// );

router.post('/user/toggle-play-local',
  userController.togglePlayLocal
);


module.exports = router;
