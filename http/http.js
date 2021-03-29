const http = require('http')
const hostname = '127.0.0.1'

const port = 3001
const server = http.createServer((req, res) => {
  res.statusCode = 200
  // res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Content-Type', 'application/json;charset=UTF-8')
  // 后端处理跨域问题
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  console.log('httpVersion', req.httpVersion)
  console.log('headers', req.headers)
  console.log('method', req.method)
  console.log('url', req.url)
  console.log('trailers', req.trailers)
  var json = JSON.stringify({
    anObject: 456,
    anArray: 789
  })
  // if (req.method === 'GET') {
  //   res.write(`这是第123456个访问的`);
  // }
  res.end(json)
})

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`)
})
