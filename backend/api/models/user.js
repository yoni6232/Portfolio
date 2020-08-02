const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    first_name : {
        type : String,
        require : true 

    },
    first_name : {
        type : String,
        require : true 

    },
    email : {type:String ,
         require : true ,
         unique : true,
         match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        },
        Phone_Number : {
            type : String,
            require : true 
    
        },
    password : {
        type : String , 
        require:true
    },
    date : {
        type :Date,
        default : Date.now
    }

});

module.exports = mongoose.model('User', userSchema);