// 链接google调试
// 教学地址 https://www.cnblogs.com/daigudasanlao/p/12670159.html
// 本地查看地址 http://localhost:9222/json/version

// puppeteer快速调试
// 本文来源：码农网
// 本文链接：https://www.codercto.com/a/44853.html

const puppeteer = require('puppeteer')
async function googlePuppeteer() {
  // console.log('googlePuppeteer', this)
  const browser = await puppeteer.connect({
    browserWSEndpoint: this.webSocketDebuggerUrl,
    'defaultViewport': { width: 1903, height: 4231 },
    headless: false
  })
  const pageAll = await browser.pages()
  const page = pageAll[0]
  // console.log('pageA', page)
  function testForEach(data) {
    if (!data.length) return
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].innerHTML)
    }
  }
  await page.$$eval('.topic-detail', el => testForEach(el))
  // console.log(presentation)
  console.log('结束')
  // await page[0].screenshot({ path: 'cnblogs.png' })
  // await browser.close()
}

module.exports = googlePuppeteer
