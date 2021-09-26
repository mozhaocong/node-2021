import { utilClass } from '../util/util'
import { get_debug_brrowse } from '../util/googlePuppeteer'
import { mySqlInit } from './mysql'
class TsInit extends utilClass {
  async init() {
    await this.sleep(300)
    // const browser = await get_debug_brrowse()
    // const page = await browser.newPage()
    // await page.goto('https://www.cnblogs.com/')
    mySqlInit()
  }
}

const start = new TsInit()
start.init()
