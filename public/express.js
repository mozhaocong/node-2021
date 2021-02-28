var express = require('express');
var app = express();
app.use(express.static("./"));
app.listen(3000, function() {   //监听http://127.0.0.1:3000端口
  console.log("server start");
});
var net = require('net')
// 检测端口是否被占用
function portIsOccupied (port) {
  // 创建服务并监听该端口
  var server = net.createServer().listen(port)
  server.on('listening', function () { // 执行这块代码说明端口未被占用
    server.close() // 关闭服务
    console.log(`端口 ${port} 可以使用`) // 控制台输出信息
  })
  server.on('error', function (err) {
    if (err.code === 'EADDRINUSE') { // 端口已经被使用
      console.log(`端口 ${port} 占用`)
    }
  })
}
// 执行
portIsOccupied(3000)
