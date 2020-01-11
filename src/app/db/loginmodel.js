var mon = require('mongoose');
var schema = mon.Schema;
var UserSchema = new schema({
  
    name:{
        type:String
        // required:true
    },
    email:{
        type:String
        // required:true
    },
    password:{type:String }

});


var UserModel = mon.model('Login',UserSchema);
module.exports = UserModel;
