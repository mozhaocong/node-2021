var express = require('express')


const defHeader = {
  res: [
    { field: 'Content-Type', val: 'application/json;charset=utf-8' }
  ]
}

// 去URL参数
import { toUrlQuestion } from './utlis/http'

const baseData = {
  data: '',
  baseAll: function(str = '', c = (req, res, next) => {}) {
    try {
      this.data.all(str, function(req, res, next) {
        defHeader.res.forEach(item => {
          res.header(item.field, item.val)
        })
        req.urlQurey = toUrlQuestion(req.url)
        c(req, res, next)
      })
    } catch (e) {
      console.log(e)
      console.log('载体为空')
    }
  },
  baseInt: function(data) {
    console.log(typeof data)
    this.data = data
    data.prototype.baseAll = this.baseAll
  }
}

module.exports = baseData


function baseData () {
  let app = express()
  app.prototype.express = express
  app.prototype.baseAll = function(str = '', c = () => {}) {
    app.all(str, function(req, res, next) {
      defHeader.res.forEach(item => {
        res.header(item.field, item.val)
      })
      req.urlQurey = toUrlQuestion(req.url)
      c(req, res, next)
    })
  }
  return app
}

module.exports = baseData
