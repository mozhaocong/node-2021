function init(page) {
  // $$eval 是获取元素属性
  // $获取 ElementHandle 用于操作 例如点击，输入
  page.mzcnTest = async function(data) {
    if (!page.$$eval) return false
    const res = await page.$$eval(data, eles => eles.map(ele => ele.innerText))
    return res
  }
  page.mzcCustomize = async function(data, ch = function() {}) {
    const bodyHandle = await page.$$(data)
    const html = await page.evaluate(body => ch(body), bodyHandle)
    return html
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
