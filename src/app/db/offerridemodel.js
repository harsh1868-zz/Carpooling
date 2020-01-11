var mon = require('mongoose');
var schema = mon.Schema;
var RideSchema = new schema({
   
    date:{
        type:Date,
        required:true
    },
    source:{
        type:String,

    }
    ,
    destination:{
        type:String,
        required:true
    },

    fare:
    {
        type:String,
        required:true

    },
    driverid:
    {
        type:String,
        
    }

});


var RideModel = mon.model('Ride',RideSchema);
module.exports = RideModel;
