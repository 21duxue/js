!#/usr/bin/node
const http=require("http");

http.createServer((res,req)=>{
  res.end('hello world');
}).listen(8080);
