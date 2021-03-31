// const keypress = require('./keypress/keypress')
// keypress.kepresss = function(data) {
//   console.log('kepresss', data)
// }
// keypress.fun()

const axiostest = require('./axios/axios')
const googlePuppeteer = require('./puppetter/google')
const response = require('./puppetter/response')
const { sleep } = require('../util/util')

const obj = {
  init: async function() {
    const data = await axiostest()
    this.webSocketDebuggerUrl = data.webSocketDebuggerUrl
    this.googlePuppeteer()
  },
  sleep: sleep,
  response: response,
  webSocketDebuggerUrl: '',
  googlePuppeteer: googlePuppeteer
}

obj.init()
