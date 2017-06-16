
var express=require('express');
var app=express();
var port=process.env.port;
app.get('/',function(req,res){
    res.send("Hello World");
    res.end();
});
app.listen(port,function(){
  console.log("App is running in port" +port);
});
