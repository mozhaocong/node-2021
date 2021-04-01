// 链接google调试
// 教学地址 https://www.cnblogs.com/daigudasanlao/p/12670159.html
// 本地查看地址 http://localhost:9222/json/version

// puppeteer快速调试
// 本文来源：码农网
// 本文链接：https://www.codercto.com/a/44853.html
const { init } = require('./util/util')
const puppeteer = require('puppeteer')
async function googlePuppeteer() {
  // console.log('googlePuppeteer', this)
  const browser = await puppeteer.connect({
    browserWSEndpoint: this.webSocketDebuggerUrl,
    'defaultViewport': { width: 1903, height: 4231 },
    headless: false
  })
  const pageAll = await browser.pages()
  let page = null
  for (const i of pageAll) {
    if (i.mainFrame().url().indexOf('http://m.ipipa.cn/') > -1) {
      page = i
    }
  }
  if (page) init(page)
  this.page = page
  // this.response()
  // const test = await page.mzcnTest('.group-list .item-text')
  // console.log(test)
  // await page.$$eval('.group-list .item-text', eles => eles.forEach(res => {
  //   if (res.innerText === '开发区实验学校') { res.click() }
  // }))
  const testA = page.mzcCustomize('.group-list .item-text', 'innerText', function(item, dom) {
    console.log(item)
  })
  console.log(testA)
  // const testA = await page.mzcnTestClick('.hotArticle-list li', 'Scrapy 安装介绍以及基本操作  44247')
  // console.log(testA)

  await this.sleep(3000)
  // await browser.close()
}

module.exports = googlePuppeteer
