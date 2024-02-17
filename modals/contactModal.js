const mongoose=require('mongoose');



const ContactSchema=mongoose.Schema({
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