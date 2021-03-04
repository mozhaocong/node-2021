var expressA = require('./baseTest')
var express = expressA()
//  执行
async function startApp() {
  const app = express()
  // use 不做接口返回处理 all和get，post做接口返回处理
  app.use(cors())
  app.use('/', function(req, res, next) {
    // 获取设备类型
    console.log(req.headers['user-agent'])
    next()
  })
  // 静态文件
  app.use('/', express.static('./html'))
  app.use('/', base)
  app.all('/api', function(req, res) {
    console.log(qs.parse(req.urlQurey))
    const test = JSON.stringify({
      all: 'all'
    })
    res.end(test)
  })
  app.all('/test', function(req, res) {
    console.log(qs.parse(req.urlQurey))
    const test = JSON.stringify({
      test: 'test'
    })
    res.end(test)
  })

  app.listen(3000, function() { // 监听http://127.0.0.1:3000端口
    console.log('服务器 http://127.0.0.1:3000')
  })
}
startApp()

