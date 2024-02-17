const express=require("express");
const { registerUser, loginUser, currentUser } = require("../Controller/userController");
const tokenValidation = require("../middleware/tokenValidationHandler");
const router=express.Router();



router.post('/register',registerUser)

router.post('/login',loginUser)

router.get('/current',tokenValidation,currentUser)


module.exports=router;