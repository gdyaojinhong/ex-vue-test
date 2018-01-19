const mongoose = require('mongoose'); // 4.11.6


// 连接数据库 如果不自己创建 默认test数据库会自动生成
// port默认为：27017,tougu为数据库名;
mongoose.connect('mongodb://localhost:27017/tougu',{useMongoClient: true});

// 为这次连接绑定事件
const db = mongoose.connection;
db.on('error', console.error.bind(console, '连接错误'));
db.once('open', function() {console.log(new Date+'  http:localhost:80连接成功')});
db.on("disconnected", function () { console.log("MongoDB connected disconnected.")});
console.log(12);

/************** 定义模式Schema **************/
const Schema = mongoose.Schema
/**
 * user表
 */
const UserSchema = new Schema({
	_id: Schema.Types.ObjectId,
	userName: String,
	passWord: String,
	createTime: Number,
	UserId: String
})

const UserListSchema = new Schema({
	_id: Schema.Types.ObjectId,
	userName: String,
	passWord: String,
	modifyTime: { type: Date, default: Date.now },
	},{
	    versionKey: false,
	    timestamps: { createdAt: 'modifyTime'}
	}
)
const Models = {
	Users: mongoose.model('users', UserSchema,'users',false),
	UserList: mongoose.model('userList', UserListSchema,'userList',false)
}

module.exports = Models;	