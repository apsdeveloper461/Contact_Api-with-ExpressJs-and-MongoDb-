const asyncHandler=require('express-async-handler');
const jwt =require("jsonwebtoken")


const tokenValidation=asyncHandler(async(req,res,next)=>{
   let token;
   const authHeader=req.headers.authorization || req.headers.Authorization;
   if(authHeader && authHeader.startsWith("Bearer")){
    token =authHeader.split(" ")[1];
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decode)=>{
        if(err){
            res.status(401);
            throw new Error("User is not as autherized")
        }
        req.user=decode.user;
        next();
    })
   }
   if(!token){
    res.status(401)
    throw new Error('Token is missing or User is not autherized')

   }
})

module.exports=tokenValidation