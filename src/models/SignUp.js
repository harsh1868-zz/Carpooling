var mongoose=require('mongoose');
var userschema3=mongoose.Schema({
    uname:{type:String},
    age:{type:String},
    mobile:{type:String},
    textarea:{type:String},
    Qualification:{type:String},
    exprieance:{type:String},
    photo:{type:String},
    proof:{type:String},
    fee:{type:String},

})

var  Signupworker=module.exports=mongoose.model('Signupworker',userschema3);