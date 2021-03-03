var net = require('net')
// 检测端口是否被占用
function portIsOccupied(port) {
  // 创建服务并监听该端口
  var server = net.createServer().listen(port)
  server.on('listening', function() { // 执行这块代码说明端口未被占用
    server.close() // 关闭服务
    console.log(`端口 ${port} 可以使用`) // 控制台输出信息
  })
  server.on('error', function(err) {
    if (err.code === 'EADDRINUSE') { // 端口已经被使用
      console.log(`端口 ${port} 占用`)
    }
  })
}
// 执行
portIsOccupied(3000)
var express = require('express')
var app = express()
var app = express()
app.use(express.static('./'))
app.listen(3000, function() { // 监听http://127.0.0.1:3000端口
  console.log('server start')
})

=======
var express = require('express');
var app = express();
app.use(function(req, res, next){
  console.log('user中间件')
  next()
})
app.use('/', function(req, res, next){
  console.log('user / 中间件')
  next()
})
app.use('/', express.static("./html"))
// app.all('/', function(req, res, next) {
//   console.log('useuse use')
//   res.end('789')
// })
app.all('*', function(req, res, next){
  res.header("Content-Type", "application/json;charset=utf-8");
  console.log('接口请求')
  console.log(req.hostname)
  console.log(req.headers['user-agent'])
  // res.redirect("http://www.example.com");
  res.end('123456')
});

app.listen(3000, function() {   //监听http://127.0.0.1:3000端口
  console.log("server start");
});

var express = require('express');
var app = express();

app.set('views', __dirname);

app.set( 'view engine', 'html' );
app.engine( '.html', require( 'ejs' ).__express );

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(80);
// var net = require('net')
// // 检测端口是否被占用
// function portIsOccupied (port) {
//   // 创建服务并监听该端口
//   var server = net.createServer().listen(port)
//   server.on('listening', function () { // 执行这块代码说明端口未被占用
//     server.close() // 关闭服务
//     console.log(`端口 ${port} 可以使用`) // 控制台输出信息
//   })
//   server.on('error', function (err) {
//     if (err.code === 'EADDRINUSE') { // 端口已经被使用
//       console.log(`端口 ${port} 占用`)
//     }
//   })
// }
// // 执行
// portIsOccupied(3000)
