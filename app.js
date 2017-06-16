var http=require('http');
http.createServer(function(req,res){
res.writeHead(200,'Content-Type{"text/json"}');
res.write("Welcome to First Bot Examples");
res.end();
}).listen(5001);
console.log('server is running at port 5001')
