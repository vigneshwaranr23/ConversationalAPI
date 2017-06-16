var http=require('http');
var port=process.env.port;

http.createServer(function(req,res){  
  res.writeHead(200,'Content-Type{"text/json"}');
  res.write("Welcome to First Bot Examples");
  res.end();
}).listen(port);
console.log('server is running at port 5001')
