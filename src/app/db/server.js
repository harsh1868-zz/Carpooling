console.log("Welcome To DB Connectivity");
const express = require('express');
const app = express();
const bPar = require('body-parser');
const mongoose = require('mongoose');
var sroute = require('./user.controller');
var oroute = require('./offerrideController');
var json = bPar.json();
var lroute = require('./logincontroller');
var router = express.Router();
var session = require('express-session');
//To extract html content
var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');app.use(bPar.urlencoded({extended:true}));
app.use(json);
 
function DBCon()
{
    mongoose.connect('mongodb://localhost:27017/Carpooling1',{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true});
    mongoose.connection.on('connected',function(){
        console.log("Connected to Carpooling");  
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
//app.use(express.session({ secret: 'something', store: store }));
app.use(session({secret: 'session',saveUninitialized: true,resave: true}));
app.use(function (request,response,next) { 
    response.setHeader("Access-Control-Allow-Origin","*");
    response.setHeader("Access-Control-Allow-Credential","true");
    response.setHeader("Access-Control-Allow-Methods","GET,HEAD,OPTIONS,POST,PUT,DELETE");
    response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
    next();
});
  console.log("Before Data1");

console.log("After Data1");
console.log("Before Data");




    app.get('/liveride',function(req,res)
    {
        var ride=require('./offerridemodel');
        console.log("Inside data liveride");
        ride.find({},(err, docs) => {
           // console.log("Invoke2");
            if (!err) { res.send(docs);   console.log("Invoke");}
            else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
        });

    })

    
    app.get('/famouseRide',function(req,res)
    {
        var ride=require('./RideRecord');
        console.log("Inside data famouseride");
        var ride1=require('./RideRecord');
        ride1.aggregate([
            {"$group" : {_id:"$source", count:{$sum:1}}},{$sort:{"_id.source":-1}}
        ],(err, docs) => {
            // console.log("Invoke2" + docs);
             if (!err) { res.send(docs);   console.log(docs);}
             else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
             }).limit(5);
      //  console.log(ride1._id);
      //  ride.find({},(err, docs) => {
       // console.log("Invoke2" + docs);
        //if (!err) { res.send(docs);   console.log("Invoke");}
       // else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
       // }).limit(5);

        
    })


    app.delete('/deleteuser/:id',function(req,res)
    {
        var User = require('./user.models');
        console.log("Inside delete"+req.params.id);
       User.remove({'_id':req.params.id}).then(data=>
            {   
                if(data==null)
                    console.log("Empty data not valid id");
                  else{
                        console.log("Deleted data is" + data);
                        res.send("deleted");
                  }

    })
})

app.get('/getuforupdate/:id',function(req,res)
{
    var User = require('./user.models');
    console.log("Inside update"+req.params.id);
   User.find({'_id':req.params.id}).then(data=>
        {   
            if(data==null)
                console.log("Empty data not valid id");
              else{
                    console.log("Updated data is" + data);
                    res.send(data);
              }

})
})
// getupdate
app.get('/getupdate',function(req,res)
{
  
    var User = require('./user.models');
    console.log("Inside update"+req.body._id);
//    User.findById(req.body._id,function(err, data) {
//     if (err) {
//         console.log("No user with given id found!");
//         res.status(400);
//         res.send("No user with given id found!");
//     }
//     data.name=req.body.name;
//     data.email=req.body.email;
//     data.mobileno=req.body.mobileno;
//     data.save( function(err) {
//         if (err) {
//             console.log("Unable to update employee");
//             res.status(400);
//             res.send("Unable to update employee");
//         }
//         else {
//             console.log("User record updated successfully"+data);
//             res.send({"message":"User record updated successfully"});
//         }
//     });


//  })
})





app.get('/getforeupdate/:id',function(req,res)
{
    var User = require('./user.models');
    console.log("Inside delete"+req.params.id);
   User.find({'_id':req.params.id}).then(data=>
        {   
            if(data==null)
                console.log("Empty data not valid id");
              else{
                    console.log("Deleted data is" + data);
                    res.send({data});
              }

})
})

    app.post('/getpastRide/:id',function(req,res)
    {
        var ride=require('./RideRecord');
 
       console.log("Booking for id"+ req.params.id);
    //     ride.find({"_id": localStorage.getItem("id")},(err, docs) => {
    //         // console.log("Invoke2");
    //          if (!err) { res.send(docs);   console.log("Invoke in pastRide" + docs);}
    //          else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    //      });

     ride.find({"userid":req.params.id},function(err,result){
        console.log(result);
         if(err){
             console.log(err);
         
         }
         else
         {      console.log("Result is "+result);
                 res.send(result);
         }
             
      } );

 
        
    })


    // getRidebyotheronyou/
    app.post('/getRidebyotheronyou/:id',function(req,res)
    {
        var ride=require('./RideRecord');
 
       console.log("Booking for id"+ req.params.id);
    //     ride.find({"_id": localStorage.getItem("id")},(err, docs) => {
    //         // console.log("Invoke2");
    //          if (!err) { res.send(docs);   console.log("Invoke in pastRide" + docs);}
    //          else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    //      });

     ride.find({"driverid":req.params.id},function(err,result){
        console.log(result);
         if(err){
             console.log(err);
         
         }
         else
         {      console.log("Result is "+result);
                 res.send(result);
         }
             
      } );

 
        
    })


    app.post("/loginverify",function(req,res){
        console.log("logging is processing...");
    se = req.session;
       se.name=req.body.name;
      console.log("session settled: "+se.name);
        var user = require('./user.models');
           user.findOne({"name":req.body.name,"email":req.body.email,"password":req.body.password},function(err,result){
           console.log(result);
            if(err){
                console.log(err);
            
            }
            else
            {
            if(result){
                if(result.name==req.body.name){
                  //  console.log(sess.name + " " +"logged in..");
                  
               req.session.name=req.body.name; 
                    console.log("Session Set"+req.session.name);
               return res.send({status:'success',user:req.body.name,svar:req.session.name,fullobject:result});
                }
            }
            else{
                console.log("Incorrect Crediantials...Please try Again..");
                return res.send({status:'fail'});
            }
              }

            });
        });

        




    app.post('/confirmrecord/:id',function(req,res)
    {  var rr = require('./RideRecord');
   

    console.log("Invoke for id");
    console.log("Id"+req.params.id+"and source is "+req.params.source);

    var dummy
    var offerobj = require('./offerridemodel');
    offerobj.findOne({"_id":req.params.id}).then(data=>
        {   
            if(data==null)
                console.log("Empty data not valid id");
              else{


                    dummy=
                    {       userid:data._id,
                            source: data.source,
                            destination:data.destination,
                            
                    }
                    rr.insertMany([dummy], function (err, std) {
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

                        console.log(data+"and dummy "+ dummy.source);
              
                            offerobj.remove({'_id':req.params.id}).then(data=>
                                {   
                                    if(data==null)
                                        console.log("Empty data not valid id");
                                      else{
                                            console.log("Deleted data is" + data);

                                      }

                       
                        
              
                    });  
        }

    });
       // console.log(dummy.source + "and" + dummy.destination)




    
      console.log([dummy])
      console.log("Data Updation for confirmation in insertmany");

       // ride.remove({})

    })

      
    app.get('/viewAccount',function(req,res)
    {
        var view=require('./user.models');
        console.log("Inside data viewAccount");
        view.find({},(err, docs) => {

            if (!err) { res.send(docs);}
            else { console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2)); }
        });

    }

    
    )


    app.get('/count',function(req,res)
    {
        var User=require('./user.models');
         User.find({}).count(function(err,docs)
        {
            if(err)
                console.log("error iin counting");
             else
             {
                 console.log("Countinh user is"+docs)
                   return res.send({docs});
              //  obj.user=docs;    
            }   

        })
      
    })

    app.get('/ridecount',function(req,res)
    {
        var Ride=require('./RideRecord');
        Ride.find({}).count(function(err,docs)
        {
            if(err)
                console.log("error iin counting");
             else
             {
                 console.log("Countinh user is"+docs)
                   return res.send({docs});
              //  obj.user=docs;    
            }   

        })
      
    })
    
    app.get('/viewRide',function(req,res)
    {
        var view=require('./RideRecord');
        console.log("Inside data viewAccount");
        view.find({},(err, docs) => {

            if (!err) { res.send(docs);}
            else { console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2)); }
        });

    })

    app.post('/confirmrecord1',function(req,res)
    {  var rr = require('./RideRecord');
   

    console.log("Invoke for id");
    console.log("Id"+req.body.rideid);
    console.log("Id"+req.body.userid);
    var dummy
    var offerobj = require('./offerridemodel');
    offerobj.findOne({"_id":req.body.rideid}).then(data=>
        {   
            if(data==null)
                console.log("Empty data not valid id");
              else{


                    dummy=
                    {       userid:req.body.userid,
                            source: data.source,
                            destination:data.destination,
                            fare:data.fare,
                            driverid:req.body.driverid
                    }
                    rr.insertMany([dummy], function (err, std) {
                        if (err) {
                            console.log("Some Error Occured:"+err);
                            res.json({
                                message: err
                            });
                            return "Some Error Occured";
                        }
                        else {
                            console.log("Data inside cnf"+dummy);
                            res.send({
                                message: "Data inserted succesfully"
                            });
                            return res.end("HI");
                            //res.send("asd");
                        }
                    });

                        console.log(data+"and dummy "+ dummy.source);
              
                            offerobj.remove({'_id':req.body.rideid}).then(data=>
                                {   
                                    if(data==null)
                                        console.log("Empty data not valid id");
                                      else{
                                            console.log("Deleted data is" + data);

                                      }

                       
                        
              
                    });  
        }

    });
       // console.log(dummy.source + "and" + dummy.destination)




    
      console.log([dummy])
      console.log("Data Updation for confirmation in insertmany");

       // ride.remove({})

    })
  


app.use('/Data',router);
sroute(router);
oroute(router);
lroute(router);







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
