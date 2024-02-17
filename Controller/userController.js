const asyncHandler=require('express-async-handler');
const userModal=require('../modals/userModal')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')

// @desc register user
// @route POST /api/user/register
// @access public
const registerUser = asyncHandler(async (req,res)=>{
    const {username,email,password}=req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    //check email already available in db.
    const checkEmail=await userModal.findOne({email});
    if(checkEmail){
        res.status(400);
        throw new Error('Email already registered');
    }

    const hashpassword=await bcrypt.hash(password,10);
    // console.log(hashpassword);
    // createed a user 
    const createUser=await userModal.create({
        username,
        email,
        password:hashpassword
    });
    if(!createUser){
        res.status(400);
        throw new Error("User Data is not Valid")
    }else{

        res.json({_id: createUser._id,username:createUser.username,email:createUser.email});
    }

});

// @desc register user
// @route POST /api/user/login
// @access public
const loginUser = asyncHandler(async (req,res)=>{
    res.json({message:"LogIn a User"});
});


// @desc current user
// @route GET /api/user/current
// @access private
const currentUser = asyncHandler(async (req,res)=>{
    res.json({message:"Current  User"});
});


module.exports={registerUser,loginUser,currentUser};