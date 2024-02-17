const express=require("express");

const router=express.Router();
//import all route data from controller contact
const {getContacts,createContact,getContact,updateContact,deleteContact}=require('../Controller/controllerContact');



//As some have same route . So, I combine it 
router.route('/').get(getContacts).post(createContact)
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact)



module.exports=router;