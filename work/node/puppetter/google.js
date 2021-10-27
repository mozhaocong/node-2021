// 链接google调试
// 教学地址 https://www.cnblogs.com/daigudasanlao/p/12670159.html
// 本地查看地址 http://localhost:9222/json/version

// puppeteer快速调试
// 本文来源：码农网
// 本文链接：https://www.codercto.com/a/44853.html
const { init } = require('./util/util')
const puppeteer = require('puppeteer')
async function googlePuppeteer() {
  const browser = await puppeteer.connect({
    browserWSEndpoint: this.webSocketDebuggerUrl,
    'defaultViewport': { width: 1903, height: 4231 },
    headless: false
  })
  const pageAll = await browser.pages()
  // let page = null
  const page = await browser.newPage()
  await page.goto('https://www.cnblogs.com/')
  // for (const i of pageAll) {
  //   if (i.mainFrame().url().indexOf('http://m.ipipa.cn/') > -1) {
  //     page = i
  //   }
  // }
  // this.page = page
  // if (page) init(page)
  // this.page.evaluate(() => { // 就是在页面运行js方法
  //   console.log(window.localStorage.getItem('RM_1000000325_6236620_59047990'))
  // })
  // this.response()
  // const test = await page.mzcnTest('.group-list .item-text')
  // console.log(test)
  // await page.$$eval('.group-list .item-text', eles => eles.forEach(res => {
  //   if (res.innerText === '开发区实验学校') { res.click() }
  // }))
  // const testA = page.mzcCustomize('.group-list .item-text', 'offsetHeight', async function(item, dom) {
  //   console.log(item)
  //   const first = await page.evaluate(data => data.offsetHeight, dom[1])
  //   console.log(first)
  // })
  // console.log(testA)
  // const testA = await page.mzcnTestClick('.hotArticle-list li', 'Scrapy 安装介绍以及基本操作  44247')
  // console.log(testA)

  // await this.sleep(3000)
  // await browser.close()
}

module.exports = googlePuppeteer
