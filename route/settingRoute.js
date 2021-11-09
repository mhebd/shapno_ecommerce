const express = require('express');
const {createSetting, getSetting} = require('../controler/settingControler');
const {private,limited} = require('../middleware/auth');

const router = express.Router();

router.route('/').post(private, limited, createSetting).get(private, limited, getSetting);

module.exports = router;