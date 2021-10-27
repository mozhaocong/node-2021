// 去URL参数
export function toUrlQuestion(data) {
  if (!data.indexOf('?') + 1) return ''
  try {
    return data.substring(data.indexOf('?') + 1)
  } catch (e) {
    return ''
  }
}
// 检测端口是否被占用
var net = require('net')
export function portIsOccupied(port) {
  const server = net.createServer().listen(port)
  return new Promise((resolve, reject) => {
    server.on('listening', () => {
      console.log(`端口 ${port}可以使用 `)
      server.close()
      resolve(port)
    })
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        // resolve(portIsOccupied(port+1))//注意这句，如占用端口号+1
        console.log(`端口 ${port} 占用`)
      } else {
        reject(err)
      }
    })
  })
}
