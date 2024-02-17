const mongoose=require('mongoose');

const userSchema=mongoose.Schema({

    username:{
        type:String,
        required:[true,"Plz enter your user name"]
    },
    email:{
        type:String,
        required:[true,"Plz enter your email "],
        unique:[true,"Plz use another email, this email is already register"]
    }, 
    password:{
        type:String,
        required:[true,"Plz enter your password "]
    },

},{
    timestamps:true
})


module.exports=mongoose.model('aps_users',userSchema)