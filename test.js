const puppeteer = require('puppeteer')
const csv = require('fast-csv')
const fs = require('fs');

(async() => {
  const startUrl = 'https://www.infoq.cn/'
  const keyWord = 'CQRS'
  const browser = await puppeteer.launch({
    slowMo: 100, // 放慢速度
    headless: false, // 是否有头
    defaultViewport: { // 界面设置
      width: 1820,
      height: 1080
    },
    ignoreHTTPSErrors: false, // 忽略 https 报错
    args: ['--start-maximized', '--no-sandbox', '--disable-setuid-sandbox']
  })

  const page = await browser.newPage()
  await page.goto(startUrl).catch(error => console.log(error))
  await page.waitFor(1 * 1000)
  await page.click('.search,.iconfont')
  await page.type('.search-input', keyWord, { delay: 100 })
  const newPagePromise = new Promise(x => browser.once('targetcreated', target => x(target.page())))
  await page.click('.search,.iconfont')
  const targetPage = await newPagePromise
  const dataCount = await targetPage.$eval('.search-body-main-tips span', el => el && el.innerHTML).catch(error => console.error(error))
  if (dataCount && dataCount > 0) {
    const dataEle = await targetPage.$$('.search-item')
    console.log(dataEle.length)
    const stream = fs.createWriteStream('infoq.csv')
    const csvStream = csv.format({ headers: true })
    csvStream.pipe(stream).on('end', process.exit)
    for (let index = 0; index < dataEle.length; index++) {
      const element = dataEle[index]
      const title = await element.$eval('a', el => el && el.innerHTML).catch(error => console.error(error))
      const desc = await element.$eval('.desc', el => el && el.innerHTML).catch(error => console.error(error))
      csvStream.write({
        标题: title || '',
        摘要: desc || ''
      })
    }
    csvStream.end(() => { console.log('写入完毕') })
  }
  await targetPage.screenshot({ path: 'infoq.png' })
  await browser.close()
})()
