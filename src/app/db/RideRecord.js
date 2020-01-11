var mon = require('mongoose');
var schema = mon.Schema;
var RideSchema = new schema({
   
    date:{
        type:Date,
      
    },
    source:{
        type:String,
        required:true

    }
    ,
    destination:{
        type:String,
        required:true
    }
    ,
    userid:
    {
        type:String,
        required:true
    }
    ,driverid:
    {
        type:String
    },
    fare:
    { type:String,
       
    }

});


var RideModel = mon.model('RideRecord',RideSchema);
module.exports = RideModel;
