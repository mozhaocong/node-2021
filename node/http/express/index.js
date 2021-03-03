var net = require('net')
var express = require('express')
var cors = require('cors')
import base from './route/base'
// 检测端口是否被占用
function portIsOccupied(port) {
  const server = net.createServer().listen(port)
  return new Promise((resolve, reject) => {
    server.on('listening', () => {
      console.log(`端口 ${port}可以使用 `)
      server.close()
      resolve(port)
    })
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        // resolve(portIsOccupied(port+1))//注意这句，如占用端口号+1
        console.log(`端口 ${port} 占用`)
      } else {
        reject(err)
      }
    })
  })
}
//  执行
async function startApp() {
  const data = await portIsOccupied(3000)
  console.log(data)
  var app = express()
  app.use(cors())
  // use 不做接口返回处理 all和get，post做接口返回处理
  app.use('/', function(req, res, next) {
    console.log(req.headers['user-agent'])
    next()
  })
  app.use('/', express.static('./html'))
  app.use('/', base)
  app.use('/test', express.static('./html'))
  app.all('/api', function(req, res) {
  })
  app.all('*', function(req, res) {
    res.statusCode = 404
    res.end('404')
  })
  app.listen(3000, function() { // 监听http://127.0.0.1:3000端口
    console.log('服务器 http://127.0.0.1:3000')
  })
}
startApp()

