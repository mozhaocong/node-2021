const defHeader = {
  res: [
    { field: 'Content-Type', val: 'application/json;charset=utf-8' }
  ]
}
// 去URL参数
function toUrlQuestion(data) {
  if (!data.indexOf('?') + 1) return ''
  try {
    return data.substring(data.indexOf('?') + 1)
  } catch (e) {
    return ''
  }
}
function postBset() {
  var express = require('express')
  express().baseAll = function(str = '', c = (req, res, next) => {}) {
    try {
      express().all(str, function(req, res, next) {
        defHeader.res.forEach(item => {
          res.header(item.field, item.val)
        })
        req.urlQurey = toUrlQuestion(req.url)
        c(req, res, next)
      })
    } catch (e) {
      console.log('载体为空')
    }
  }
  return express
}
function fun() {
  // eslint-disable-next-line new-cap
  return new postBset()
}
module.exports = fun
