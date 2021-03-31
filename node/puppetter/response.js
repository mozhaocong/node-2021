function response() {
  console.log('response开始')
  this.page.on('response',
    function(response) {
      console.log(response.url()) // 显示响应的 URL，字符串
      console.log(response.headers()) // 显示响应的header对象
      console.log(response.text()) // 显示响应的body，Promise
      console.log(response.status()) // 显示响应的状态码，数值型
      console.log(response.ok()) // 显示响应是否成功，布尔值
      console.log(response.request()) // 显示响应对应的 request 对象
    })
}
module.exports = response
