var express = require('express')
const baseExpress = require('../base')
const base = express()
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
