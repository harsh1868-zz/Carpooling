createRide = function (req, res, next) {
    var Driver = {
        source: req.body.source,
        driverid: req.body.driverid,
        date: req.body.date,
        destination:req.body.destination,
        fare:req.body.fare
    };
//     console.log("das");
   // student.find(function(err,data){if(err) throw err; else {console.log(data);}});
    
    var driver = require('./offerridemodel');
  console.log("Invoke");
   driver.insertMany([Driver], function (err, std) {
    console.log("Driver d"+Driver.driverid )
         
        if (err) {
            console.log("Some Error Occured:"+err);
            res.json({
                message: err
            });
            return "Some Error Occured";
        }
        else {
            res.send({

                message: "data inserted succesfully"
            });
            return res.end("HI");
            //res.send("asd");
        }
    });


    
}


// GetRide = function (req, res, next) {
   
//    var driver = require('./offerridemodel');
//    //const express = require('express');
//   // var router = express.Router();
//   console.log("Invokeget");
//   //driver.get('/all', (req, res) => {
//     console.log("Invoke1");
//     driver.find({},(err, docs) => {
//         console.log("Invoke2");
//         if (!err) { res.send(docs);   console.log("Invoke3error");}
//         else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
//     });
 


    
// }



module.exports = function(router){
    // router.get('/all',GetRide);
    router.post('/postride',createRide);

  
}
