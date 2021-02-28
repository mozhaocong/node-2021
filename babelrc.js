const timeA = new Date().getTime()
console.log('NODE_ENV', process.env.NODE_ENV)
console.log('process env', process.argv)
var fs = require('fs')
var babelConfig = JSON.parse(fs.readFileSync('./.babelrc'))
require('babel-register')(babelConfig)
// require('./public/index.js')
require('./public/express.js')
var data = {
  fun: () => {
    console.log(this)
    // require('./puppetter/TimeoutError.js')
  }
}
// 定义一个对象 已模板引入 方便使用this
data.fun()
const timeB = new Date().getTime()
console.log('运行时间', timeB - timeA)


