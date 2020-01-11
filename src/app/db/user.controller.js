createUser = function (req, res, next) {
    var userL = {
        name: req.body.name,
        //id: req.body.id,
        email: req.body.email,
        password:req.body.password,
        mobileno:req.body.mobileno
    };
//     console.log("das");
   // student.find(function(err,data){if(err) throw err; else {console.log(data);}});
 
   var user = require('./user.models');
 
   user.insertMany([userL], function (err, std) {
        if (err) {
            console.log("Some Error Occured:"+err);
            res.json({
                message: err
            });
            return "Some Error Occured";
        }
        else {
            res.send({
                message: "Data inserted succesfully"
            });
            return res.end("HI");
            //res.send("asd");
        }
    });

    
}



module.exports = function(router){
    router.post('/create',createUser);
}