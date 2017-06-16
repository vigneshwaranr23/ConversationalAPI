var express=require('express');
var ai=require('apiai');
var aiengine=apiai('19e8670c945d4a6a864d01c421f4a363');
var app=express();
var port=process.env.port||5001;
//app.get('/',function(req,res){
  //  res.send("Hello World");
    //res.end();
//});
app.post('/',function(req,res){
   console.log(JSON.stringify(req.body));
 });
app.listen(port,function(){
  console.log("App is running in port" +port);
});
