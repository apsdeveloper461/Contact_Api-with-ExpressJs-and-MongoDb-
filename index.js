//Import express
const express=require('express');
const errorHandler = require('./middleware/errorHandler');
const dbconnect = require('./config/dbconnect');

//Import DOtenv to create a port
const dotenv=require("dotenv").config();
const port=process.env.PORT || 5000;


dbconnect()
//Get app from Express
const app=express();
//use Middle ware to get data from User is always json 
app.use(express.json());
//Get route
//Middle ware to set route from route folder
app.use('/api/contacts',require("./routes/contactRoute"))
app.use('/api/user',require("./routes/userRoute"))
//middleware to handle error 
app.use(errorHandler);



//create a port listen
app.listen(port,()=>{
    console.log("Hello Iam Mehboob Alam");
})
