var express = require('express')
// const qs = require('qs')
var cors = require('cors')
const route = require('./route')
// 手动封装 express的all， get， post 等方法 用于同一设置默认值

var baseExpress = require('./base.js')
import { portIsOccupied } from './utlis/http'
//  执行
async function startApp() {
  const data = await portIsOccupied(3000)
  console.log(data)
  const app = express()
  baseExpress.baseInt(app)

  // use 不做接口返回处理 all和get，post做接口返回处理
  app.use(cors())
  app.use('/', function(req, res, next) {
    // 获取设备类型
    console.log(req.headers['user-agent'])
    next()
  })
  // console.log('----------route', route)
  route.forEach(res => {
    app.use(res.path)
  })
  // 静态文件
  app.use('/', express.static('./html'))

  // 最后什么都没有匹配上 返回404
  app.all('*', function(req, res) {
    res.statusCode = 404
    res.end('404')
  })

  app.listen(3000, function() { // 监听http://127.0.0.1:3000端口
    console.log('服务器 http://127.0.0.1:3000')
  })
}
startApp()

