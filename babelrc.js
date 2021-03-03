const timeA = new Date().getTime()
console.log('NODE_ENV', process.env.NODE_ENV)
console.log('process env', process.argv)
require('babel-polyfill')
var fs = require('fs')
var babelConfig = JSON.parse(fs.readFileSync('./.babelrc'))
require('babel-register')(babelConfig)
var data = {
  fun: () => {
    // require('./puppetter/TimeoutError.js')
    require('./node/http/express/index.js')
  }
}
// 定义一个对象 已模板引入 方便使用this
data.fun()
const timeB = new Date().getTime()
console.log('运行时间', timeB - timeA)
