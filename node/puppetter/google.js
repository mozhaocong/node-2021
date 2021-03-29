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
  let page = null
  for (const i of pageAll) {
    if (i.mainFrame().url() === 'https://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&keyword=%E5%A5%B3%E8%A3%85&clk1=0f044ae2f43eecd1f2f7927654b6751d&upsId=0f044ae2f43eecd1f2f7927654b6751d') {
      page = i
    }
  }
  // $$eval 是获取元素属性
  // $获取 ElementHandle 用于操作 例如点击，输入
  // const textA = await page.$('.group-list .item-text')
  // // console.log('textA', textA.click())
  // textA.click()
  // const textB = await page.$$eval('.group-list>.item-text', eles => eles.map(ele => ele.innerText))
  // console.log(textB)
  // const textC = await page.$$eval('.group-list .childs .item-text', eles => eles.map(ele => ele.innerText))
  // console.log(textC)
  // const textD = await page.$$('.group-list .item-text')
  // // console.log('textA', textA.click())
  // textD[0].click()
  // await page.screenshot({ path: 'cnblogs.png' })
  // await browser.close()
  const textC = await page.$$eval('.pc-search-items-list .pc-items-item.item-undefined .title-text', eles => eles.map(ele => ele.innerText))
  console.log(textC)
}

module.exports = googlePuppeteer
