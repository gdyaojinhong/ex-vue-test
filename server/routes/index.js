var express = require('express');
var router = express.Router();

/* GET home page. */
exports.index = (req, res) => {
    res.render('index');
}
