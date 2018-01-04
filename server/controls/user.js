let express = require('express');
let router = express.Router();
let mysql = require('mysql');

let db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'abc123',
  database: 'abctest'
});

exports.getUserList = (req, res) => {
  let params = req.params;
  let  sql = 'SELECT * FROM websites';
  db.query(sql,(err, data) => {
    if (err){
      console.log(err);
      res.status(500).send('database err').end();
    }else {
      console.log(data);
      if (data.length == 0) {
        res.status(500).send('no datas').end();
      } else {
        res.send(data);
      }
    }
  })
}
