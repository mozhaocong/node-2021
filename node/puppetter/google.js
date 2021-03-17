// 教学地址 https://www.cnblogs.com/daigudasanlao/p/12670159.html

const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: 'ws://localhost:9222/devtools/browser/25f868fe-62ad-42c6-adc4-d20f0980ffa0',
    headless: false
  })
  const page = await browser.newPage()
  await page.goto('https://www.cnblogs.com/')
  await page.screenshot({ path: 'cnblogs.png' })

  // await browser.close();
})()
