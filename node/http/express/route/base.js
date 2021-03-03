var express = require('express')
const base = express()

base.use('/base', function(req, res, next) {
  console.log('/base')
  next()
})
base.all('/base', function(req, res, next) {
  res.end('/base')
})

export default base
