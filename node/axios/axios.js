// puppeteer快速调试
// 本文来源：码农网
// 本文链接：https://www.codercto.com/a/44853.html

const axios = require('axios')
async function get_debug_url() {
  var rsp = await axios.get('http://127.0.0.1:9222/json/version')
  return rsp.data
}
module.exports = get_debug_url
