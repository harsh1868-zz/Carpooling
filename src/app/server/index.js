var express=require('express');
var app = express();


app.set('port',process.env.port||3000);

var mongoose=require('mongoose');
var cors=require('cors');
var bodyParser = require('body-parser');
var cookieParser=require('cookie-parser');
var Login=require('./../../models/User');




app.use(cookieParser());
app.use(function (req, res, next) {
  //Enabling CORS
  res.append("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
 res.append('Access-Control-Allow-Headers','Content-type');
 next();
  }); 
  



var db=mongoose.connect('mongodb://localhost:27017/Urbansnap',function(err,response){
  if(err) console.log("ther is err");
  console.log("connectionn sucess");
  
});




app.use(cors());

app.use(bodyParser.json());
  
app.get('/',(req,res)=>
{
    res.send("Hello");
});


app.post('/register',(req,res)=>
{console.log(req.body);
    var name=req.body.name;
    var email=req.body.email;
    var user=new Login();
    user.name=name;
    user.email=email;

    user.save((err,result)=>
    {
        if(err)
        {
        console.log("error");
        res.sendStatus(500);
        }
        res.sendStatus(200);
    })
    

})


app.listen(app.get('port'),function(err,response)
{
  console.log("server is running");
});