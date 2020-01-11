const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { User } = require('../../../models/User');

// => localhost:3000/employees/
router.get('/', (req, res) => {
    var ur = new User({
        name: req.body.name,
       
        email: req.body.email
    });
   // ur.save();
    User.find((err, docs) => {

         if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    }); 
res.send("Hello");
});

router.post('/', (req, res) => {
    var ur = new User({
        name: req.body.name,
       
        email: req.body.email
    });
    console.log(ur.name);
    User.insertMany([ur], function (err, std) {
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
 
     //res.sendStatus(200);
    // ur.save((err, doc) => {
    //     if (!err) { res.send(doc); }
    //     else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
    // });
});



module.exports = router;