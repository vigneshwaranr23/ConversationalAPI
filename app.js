var express=require('express');

var bodyParser = require('body-parser');

var apiai=require('apiai');

var aiengine=apiai('19e8670c945d4a6a864d01c421f4a363');

var app=express();

var port=process.env.PORT||5001;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post ('/',function(req,res){
  console.log(req);
  var apiagentreq=req.body.result&&req.body.result.parameters;
  var result=req.body.result;
  var body=req.body;
  var param=req.body.result.parameters;
  console.log('Result Obj are'+JSON.stringify(result));
  console.log('body Obj are'+ JSON.stringify(body));
  console.log('param Obj are'+ JSON.stringify(param));
  var resagent='Your Ticket has been blocked please choose you paymentType';
  console.log('request are'+JSON.stringify(apiagentreq));
  return res.json({
    speech:resagent,
    displayText: resagent,
    source:''
  });
});

app.listen(port,function(){
  console.log("App is running in port" +port);
});
