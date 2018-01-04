let express = require('express');
let router = express.Router();

let mysql = require('mysql');
let db = require('../bin/db');
let pool = mysql.createPool(db);

// exports.getUserList = (req, res) => {
//   let params = req.params;
//   let  querySql = 'SELECT * FROM websites';
//   pool.query(querySql,(err, data) => {
//     if (err){
//       console.log(err);
//       res.status(500).send('database err').end();
//     }else {
//       console.log(data);
//       if (data.length == 0) {
//         res.status(500).send('no datas').end();
//       } else {
//         res.send(data);
//       }
//     }
//   })
// }
exports.getUserList = (req, res) => {
  res.json({code: 200, msg: 'ok', data: '45456465465465456'});
}
