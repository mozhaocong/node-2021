function response() {
  this.responseHandle = async(response) => {
    if (response.request()._resourceType === 'xhr') {
      console.log(response.url())
      // console.log(response.headers())// response 对象 的headers
      // console.log(response.request().headers()) // 获取request 对象 的headers
      console.log(response.request()._method) // 获取请求方法 get post
      const dataJSON = await response.json()
      this.PtConsole(dataJSON)
      // console.log(dataJSON)
      // await this.page.addScriptTag({ // 注入脚本
      //   content: "console.log('注入脚本')"
      // })
    }
  }
  this.page.on('response',
    (response) => {
      // console.log(response.url()) // 显示响应的 URL，字符串
      // console.log(response.headers()) // 显示响应的header对象
      // console.log(response.text()) // 显示响应的body，Promise
      // console.log(response.status()) // 显示响应的状态码，数值型
      // console.log(response.ok()) // 显示响应是否成功，布尔值
      // console.log(response.request()) // 显示响应对应的 request 对象
      this.responseHandle(response)
    })
}
module.exports = response
