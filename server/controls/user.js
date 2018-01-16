let express = require('express');
let router = express.Router();
let models = require('../bin/db');
const mongoose = require('mongoose');
 

// 获取数据
const execCallback = function(p,err,data,res){
 	if(err){
 		res.send(err);
	}else{
		//再次查询，获取总数
		p.find().count((err,result) => {
			if (err) {
				res.send({'status':0,'data':'','message':err,'count':''});  
			} else {
				res.send({'status':1,'data':data,'message':'success','count':result});  
			}
	    });
	}
}


// 更新和保存用户信息回调
const callback = function(err,data,res){
	if(err){
		res.send({'status':0,'data':'','message':err,'count':''});  
	}else{
		res.send({'status':1,'data':data,'message':'success','count':''});  
	}
}




exports.getUserList = (req, res) => {
  let params = req.query;
  const p = models.Users;
	p.create({
		"name": params.name,
		"id": params.id,
		"url": "url", 
	},function(err,data){
		execCallback(p,err,data,res)
	})
}

