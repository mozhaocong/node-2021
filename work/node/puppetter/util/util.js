function init(page) {
  // $$eval 是获取元素属性
  // $获取 ElementHandle 用于操作 例如点击，输入
  page.mzcnTest = async function(data) {
    if (!page.$$eval) return false
    const res = await page.$$eval(data, eles => eles.map(ele => ele.innerText))
    return res
  }
  page.mzcCustomize = async function(data, value, ch = function() {}) {
    const bodyHandle = await page.$$(data)
    const links = await page.evaluate((data) => {
      const selectors = data.dom
      const value = data.value
      const array = []
      document.querySelectorAll(selectors).forEach(res => {
        array.push(res[value])
      })
      return array
    }, { dom: data, value: value })
    ch(links, bodyHandle)
    // console.log('links', links)
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

  page.on('console', msg => {
    for (let i = 0; i < msg.args().length; ++i) { console.log(`${i}: ${msg.args()[i]}`) } // 译者注：这句话的效果是打印到你的代码的控制台
  })
}

function PtConsole() {
  const data = arguments
  if (!data.length) {
    return
  } else if (data.length === 1) {
    this.page.evaluate((value) => console.log(value), data[0]) // 这个代码表示在页面实例中执行了console.log。如果没有监听console事件，这里的输出不会出现在你的控制台
  } else {
    // for (const dataKey of data) {
    //   this.page.evaluate((value) => console.log(value), dataKey)
    // }
    this.page.evaluate((value) => {
      for (const i in value) {
        console.log(value[i])
      }
    }, data) // evaluate, 第二个参数 如果是数组会转化为对象
  }
}

module.exports = { init, PtConsole }
