let express = require('express');
let getApi = require('../controls/api');
let api = require('../api');
let router = express.Router();


router.get(api.userLogin, getApi.userLogin);
router.get(api.getUserList,getApi.getUserList);
router.get(api.delUser,getApi.delUser);
module.exports = router;

