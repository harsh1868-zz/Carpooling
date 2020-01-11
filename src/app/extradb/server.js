console.log("Welcome To DB Connectivity");
const exp = require('express');
const app = exp();
const bPar = require('body-parser');
const mongoose = require('mongoose');
var sroute = require('./student.controller');
var json = bPar.json();

var router = exp.Router();
//To extract html content
app.use(bPar.urlencoded({extended:true}));
app.use(json);

function DBCon()
{
    mongoose.connect('mongodb://localhost:27017/ShareEduDB',{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true});
    mongoose.connection.on('connected',function(){
        console.log("Connected to ShareEduDB");  
    });
    mongoose.connection.on('error',function(error){
        console.log("Error while connecting: "+ error);
    });
    mongoose.connection.on('disconnected',function(){
        console.log("Disconnected: ");
    });
}
DBCon();



//Error Handling
app.use(function (request,response,next) { 
    response.setHeader("Access-Control-Allow-Origin","*");
    response.setHeader("Access-Control-Allow-Credential","true");
    response.setHeader("Access-Control-Allow-Methods","GET,HEAD,OPTIONS,POST,PUT");
    response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
    next();
});
   
app.use('/DB',router);
sroute(router);



app.listen(7762,function(){
    console.log('Listening on port: 7762');
});

app.get('/',function(req , res){
    //res.send("HELLO WORLD");
    //res.sendFile(__dirname+'/package.json');
    res.sendFile(__dirname + '/index.html')
});

app.post('/home',function(req , res){
    console.log(req.body);
    
});
