var express = require('express')
const baseExpress = require('../base')
const base = express()

// 设置跨域请求头
base.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})
baseExpress.baseInt(base)
// base.use('/base', function(req, res, next) {
//   console.log('/base')
//   next()
// })
base.all('/base', function(req, res, next) {
  const data = JSON.stringify({
    data: 1111
  })
  res.end(data)
})
base.baseAll('/baseAll', function(req, res, next) {
  const data = JSON.stringify({
    data: 2222
  })
  res.end(data)
})
module.exports = base
