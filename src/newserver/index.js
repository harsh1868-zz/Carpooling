var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var UserModel = require('./../models/User');
var app = express();


app.use(function (req, response, next) {
  response.append("Access-Control-Allow-Origin","*");
  response.append("Access-Control-Allow-Credential","true");
  response.append("Access-Control-Allow-Methods","GET,HEAD,OPTIONS,POST,PUT");
  response.append("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
 
//   res.append("Access-Control-Allow-Origin", "*");
//   res.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//  res.append('Access-Control-Allow-Headers','Content-type');
next();
}); 
 



var db=mongoose.connect('mongodb://localhost:27017/carpooling',{useNewUrlParser:true},function(err,response){
  if(err) console.log("ther is error");
  console.log("connection sucess",mongoose.connect);
  
})



app.set('port',process.env.port||3000); 
app.use(bodyparser.json());
app.get('/',(req,res)=>
{
    res.send("Hello");
})


var u1=new UserModel();
u1.name ="hash";
u1.email="Hash";

u1.save();
// var user=new User();
//      console.log(user);
//      user.name=name;
//      user.email=email;
//     console.log(user.name);
//     user.save((req=>));


app.post('/register',(req,res)=>
{console.log(req.body);
    var data={
     name : req.body.name,
     email : req.body.email
    }
    // UserModel.save((err,result)=>
    // {
    //     if(err)
    //     {
    //     console.log("error");

    //     res.sendStatus(500);
    //     }
    //     res.send({name:"Hello"});
    //     res.sendStatus(200);
    // })

    console.log("Enter");
    UserModel.insertMany([data],function (err, std) {
      if (err) {
          console.log("Some Error Occured:"+err);
          res.json({
              message: err
          });
          return "Some Error Occured";
      }
      else {
          res.send({
              message: "Student inserted succesfully"
          });
          return res.end("HI");
          //res.send("asd");
      }
    });
      
    


})

// app.post('/register',(req,res)=>
// {
//      console.log(req.body);
//      var name=req.body.name;
//      var email=req.body.email;
    
//      var user=new User();
//      console.log(user);
//      user.name=name;
//      user.email=email;
//     console.log(user.name);

//     user.save((err,result)=>
//      {console.log("saving..");
//          if(err)
//         {
//          console.log("error");
//          //res.sendStatus(500);
//          }
        
//         console.log("okk");
//         // res.sendStatus(200);
//         // }
//         })
// //var x={name:"Bugati"};
//    // db.collection("car").insertOne(x)
//   // / // db.car.insert({name:"Bugati"});


// })




app.listen(8000,function(err,response)
{
  console.log("server is running on port ",app.get('port'));
});