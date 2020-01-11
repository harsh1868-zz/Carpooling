verifyUser = function (req, res, next) {
    var user = {
        name  : req.body.name,
        email : req.body.email,
        password: req.body.password
      
    };
//     console.log("das");
   // student.find(function(err,data){if(err) throw err; else {console.log(data);}});
    
    var User = require('./loginmodel');
  console.log("Invoke");
   User.insertMany([user], function (err, std) {
        if (err) {
            console.log("Some Error Occured:"+err);
            res.json({
                message: err
            });
            return "Some Error Occured";
        }
        else {
            res.send({
                message: "Data  verified succesfully"
            });
            return res.end("HI");
            //res.send("asd");
        }
    });

    
}



module.exports = function(router){
    router.post('/login',verifyUser);
}