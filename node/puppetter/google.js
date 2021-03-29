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
    if (i.mainFrame().url() === 'https://blog.csdn.net/qq_42543250/article/details/81347368') {
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
  console.log('3.00')
  await this.sleep(3000)
  console.log('4000')
  await page.screenshot({ path: 'cnblogs.png' })
  // await browser.close()
  // const textC = await page.$$eval('.pc-search-items-list .pc-items-item.item-undefined .title-text', eles => eles.map(ele => ele.innerText))
  // console.log(textC)
}

module.exports = googlePuppeteer
