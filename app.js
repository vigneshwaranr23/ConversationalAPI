var express=require('express');

var bodyParser = require('body-parser');

var apiai=require('apiai');

var aiengine=apiai('19e8670c945d4a6a864d01c421f4a363');

var app=express();

var port=process.env.PORT||5001;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post ('/',function(req,res){
  var apiagentreq=req.body.result&&req.body.result.parameters;
  var resagent='hello welcome to TICKET BOOK chat bot';
  console.log('request are'+apiagentreq);
  return res.json({
    speech:resagent,
    displayText: resagent,
    source:'hello ticket book'
  });

app.listen(port,function(){
  console.log("App is running in port" +port);
});
