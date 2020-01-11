




var mon = require('mongoose');
var schema = mon.Schema;
var UserSchema = new schema({
    // id:{
    //     type:Number,
    //     unique:true,
    //     required:true
    // },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    },
    mobileno:
{
    type:String
   
}

});


var UserModel = mon.model('User',UserSchema);
module.exports = UserModel;
