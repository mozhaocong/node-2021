var express = require('express')
  , cors = require('cors')
  , app = express();

app.use(cors());


app.all('*', function(req, res, next){
  res.header("Content-Type", "application/json;charset=utf-8");
  console.log('接口请求')
  res.end('123456')
});

app.get('/test', function(req, res){
  res.header("Content-Type", "application/json;charset=utf-8");
  var json = JSON.stringify({
    anObject: 789,
    anArray: 789
  });
  res.send(json);
});

app.all('*', function(req, res){
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("404 error!\n");
});

var server =  app.listen(3001, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
