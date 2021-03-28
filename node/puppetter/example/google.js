// 教学地址 https://www.cnblogs.com/daigudasanlao/p/12670159.html
// 本地查看地址 http://localhost:9222/json/version

const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: 'ws://localhost:9222/devtools/browser/26e887f9-ac92-44ba-b976-cca24a768118',
    headless: false
  })
  const page = await browser.newPage()
  await page.goto('https://www.cnblogs.com/')
  await page.screenshot({ path: 'cnblogs.png' })

  await browser.close()
})()
