let express = require('express');
let router = express.Router();
let models = require('../bin/db');
let mutils = require('../bin/mutils');
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

//存储用户信息的回调方法
//params: p,表格的名称 
//params:reqData 数据类型为数组。reqData[0]:为更新的标准;reqDatae[1]:为更新的数据
//params: res,为接口响应的反馈

//新增用户信息
const saveUserInfo = function(q,reqData,res){
	console.log('新增')
	q.create(reqData,function(err,data){
		console.log(data)
		callback(err,data,res);
	})
}

//更新用户信息
const updateUserInfo = function(p,reqData,res){
	p.update(reqData[0],reqData[1],function(err,data){
		callback(err,data,res);
	})
}


//用户登录新增用户和更新用户
exports.userLogin = (req, res) => {
	let userName = req.query.userName;
	let passWord = req.query.passWord;
	let createTime = mutils.formatDate(new Date(),2);
	let where = {'userName' :userName};
	let q = models.Users;
	q.find(where).exec( (err,data) => {
		console.log("---where----")
		console.log(data);
		if (err) {
			res.send({'status':'','data':'','message':err,'count':''})
			return
		}else{
			if (data !="") { //data类型
				console.log('--------更新用户--------');
				const dataArr = data[0];
				const reqData = [{'_id' :dataArr._id},{
					'userName' : userName,
					'passWord' : passWord,
					'createTime' : createTime,
					'UserId' : 'UserId'
				}]
				updateUserInfo(q,reqData,res);
			}else{
				console.log('------新增用户-------');
				const id = mongoose.Types.ObjectId();
				const reqData = [{
					'_id':id,
					'userName' : userName,
					'passWord' : passWord,
					'createTime' : createTime,
					'UserId' : 'UserId'
				}]
				saveUserInfo(q,reqData,res);
			}
		}

	})
}
//获取用户列表数据
exports.getUserList = (req, res) =>{
	console.log('获取用户登录列表');
	let pageNum = parseInt(req.query.pageNum);
	let pageSize = parseInt(req.query.pageSize);
	let p = models.Users;
	p.find().exec(function(err,data){
		execCallback(p,err,data,res);
	})
}
