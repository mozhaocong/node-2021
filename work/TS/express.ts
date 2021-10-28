var express = require('express')
const app = express()

// 设置跨域请求头
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.all('/base', function(req, res, next) {
  console.log('res', req, res)
  const data = JSON.stringify({
    data: 1111
  })
  res.end(data)
})
app.all('/baseAll', function(req, res, next) {
  // console.log('res', req, res)
  console.log('req.urlQurey', req.url)
  const data = JSON.stringify({
    data: 2222
  })
  res.end(data)
})


app.listen(3000, function() { // 监听http://127.0.0.1:3000端口
  console.log('服务器 http://127.0.0.1:3000')
})
