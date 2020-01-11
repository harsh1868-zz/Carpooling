createStudent = function (req, res, next) {
    var studentL = {
        name: req.body.name,
        id: req.body.id,
        marks: req.body.marks
    };
//     console.log("das");
   // student.find(function(err,data){if(err) throw err; else {console.log(data);}});
    var ss;
    
   console.log(ss); 
   var student=require('./student.models');
   student.insertMany([studentL], function (err, std) {
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

    
}



module.exports = function(router){
    router.post('/create',createStudent);
}