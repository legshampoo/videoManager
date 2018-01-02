const express = require('express');
const router = express.Router();

const deviceController = require('../controllers/deviceController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.post('/request-new-uuid', deviceController.registerDevice);

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

module.exports = router;
