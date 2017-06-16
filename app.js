var http=require('http');
http.createServer(function(req,res){
  var port=process.env.port;
res.writeHead(200,'Content-Type{"text/json"}');
res.write("Welcome to First Bot Examples");
res.end();
}).listen(port);
console.log('server is running at port 5001')
