
var express=require('express');
var app=express();
var ab=process.env.PORT || 3000;
app.get('/',function(req,res){
    res.send("Hello World");
    res.end();
});
app.listen(ab,function(){
  console.log("App is running in port" +ab);
});
