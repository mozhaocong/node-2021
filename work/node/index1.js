const axiostest = require('./axios/axios')
const googlePuppeteer = require('./puppetter/google')
const response = require('./puppetter/response')
const { sleep } = require('../util/util')
const { PtConsole } = require('./puppetter/util/util')

const obj = {
  init: async function() {
    const data = await axiostest()
    this.webSocketDebuggerUrl = data.webSocketDebuggerUrl
    this.googlePuppeteer()
  },
  sleep: sleep,
  response: response,
  webSocketDebuggerUrl: '',
  googlePuppeteer: googlePuppeteer,
  PtConsole: PtConsole
}

obj.init()