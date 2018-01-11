let express = require('express');
let router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
 


exports.getUserList = (req, res) => {
  let params = req.params;
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        console.log("数据库已创建!");
        db.close();
      });
}

