const express = require('express');
const router = express.Router();

const deviceController = require('../controllers/deviceController');

router.post('/request-new-uuid', deviceController.registerDevice);

module.exports = router;
