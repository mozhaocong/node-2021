function init(page) {
  page.mzcnTest = async function(data) {
    if (!page.$$eval) return false
    const res = await page.$$eval(data, eles => eles.map(ele => ele.innerText))
    return res
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
