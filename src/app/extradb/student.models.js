var mon = require('mongoose');
var schema = mon.Schema;
var studentSchema = new schema({
    id:{
        type:Number,
        unique:true,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    marks:{
        type:Number,
        required:true
    }

});


var studentModel = mon.model('Student',studentSchema);
module.exports = studentModel;
