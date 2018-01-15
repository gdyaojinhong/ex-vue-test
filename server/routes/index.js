let express = require('express');
let user = require('../controls/user');
let api = require('../api');
let router = express.Router();


router.get(api.userList, user.getUserList);

module.exports = router;

