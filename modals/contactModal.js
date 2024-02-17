const mongoose=require('mongoose');



const ContactSchema=mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"aps_users"
       },
    name: {
        type: String,
        required:[true,"Please enter the name"]
    },
    email :{
        type: String,
        required:[true,"Please enter the Email"]
    },
    phone:{
        type: String,
        required:[true,"Please enter the Phone No"]
    }
},{
    timestamps:true
});


module.exports=mongoose.model('aps_contacts',ContactSchema);