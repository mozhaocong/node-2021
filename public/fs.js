const fs = require('fs')
export function createWriteStream(data = '', src = 'data.json') {
// 文件不存储会创建 如果存在会先清空文件类容，再将文件写入
// 第一个参数，写入路径
// 第二个最高水位线 默认16K
// 默认是utf8格式写入
  const ws = fs.createWriteStream(src)
  // write是异步方法，有返回值，每次调用write方法会返回布尔值
  // write里面只能是字符串或buffer
  ws.write(data)
  // 监控内存里面全部写完了，恢复读取，才会调用此方法
  ws.on('drain', function() {
    console.log('内存干了')
  })
  ws.end() // 结束，如果调用end,会强制将内存中的内容全部写入，然后关闭文件
}

