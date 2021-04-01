function init(page) {
  // $$eval 是获取元素属性
  // $获取 ElementHandle 用于操作 例如点击，输入
  page.mzcnTest = async function(data) {
    if (!page.$$eval) return false
    const res = await page.$$eval(data, eles => eles.map(ele => ele.innerText))
    return res
  }
  page.mzcCustomize = async function(data, value, ch = function() {}) {
    // const bodyHandle = await page.$$(data)
    console.log(data)
    const testdata = value
    const links = await page.evaluate((data) => {
      const urls = []
      const hrefs = document.querySelectorAll('.group-list .item-text')
      hrefs.forEach(function(el) {
        urls.push(el[data])
      })
      return data
    }, testdata)
    console.log('links', links)
    // function test(data1, ...value1) {
    //   console.log('test', data1, value1)
    //   console.log(typeof value1[0])
    // }
    // test(data, value)
    // console.log('document', document.querySelectorAll(data))
    // for (const i of bodyHandle) {
    //   const html = await page.evaluate((body) => body['innerText'], i)
    //   console.log(html, value)
    // }
    // const html = await page.evaluate((body) => body.innerText, bodyHandle)
    // console.log('html', bodyHandle.length)
    // console.log('html', value, bodyHandle)
    // return html
  }
  page.mzcnTestClick = async function(dom, value) {
    const res = await page.mzcnTest(dom) || []
    const clickDom = await page.$$(dom)
    for (let i = 0; i < res.length; i++) {
      if (res[i] === value) {
        clickDom[i].click()
        return res[i]
      }
    }
    return false
  }
}
module.exports = { init }
