import { utilClass } from '../util/util'
import { get_debug_brrowse } from '../util/googlePuppeteer'
class TsInit extends utilClass {
  async init() {
    await this.sleep(300)
    const browser = await get_debug_brrowse()
    const page = await browser.newPage()
    await page.goto('https://www.cnblogs.com/')
  }
}

const start = new TsInit()
start.init()
