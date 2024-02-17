//import mongoose 
const mongoose=require('mongoose');

//connect through async function and use try catch block to handle error

const dbconnect=async ()=>{
    try {
        const connect= await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("COnnected Database " , connect.connection.host , connect.connection.name);
    } catch (error) {
        console.log(error);
        console.log("Connection Problem");
        // process.exit(1);

    }

}


module.exports=dbconnect;