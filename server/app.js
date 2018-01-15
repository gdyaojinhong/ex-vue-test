let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let fs = require('fs'); // 引入文件模块
let router = require('./routes/index');
let ejs = require('ejs');
let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//add html模板
app.engine('.html', ejs.__express);
app.set('view engine', 'html');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);




//处理webpack服务请求
app.get('*', function(req, res) {
  const html = fs.readFileSync(path.resolve(__dirname, './views/index.html'),'utf-8');
  res.send(html)
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
