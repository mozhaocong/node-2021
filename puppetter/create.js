const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch(
    {
      headless: false, // 是否有头
      defaultViewport: {// 界面设置
        width: 1820,
        height: 1080
      },
    }
  );
  const page = await browser.newPage();
  await page.goto('https://cloud.tencent.com/developer/section/1135580'); // 去到指点页面
  // 其他操作...
  // await browser.close();
  page.once('load', () => console.log('Page loaded!'));
  // const presentation = await page.$('.presentation').innerHTML
  // const presentation = await page.$$eval('.presentation', el => el.length)
  await page.$$eval('.presentation', el => testForEach(el))
  // console.log(presentation)
  console.log('结束')
  function testForEach(data) {
    if (!data.length) return
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].innerHTML)
    }
  }
})()