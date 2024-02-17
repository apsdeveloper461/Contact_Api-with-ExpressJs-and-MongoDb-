const asyncHandler = require("express-async-handler");
//import of the sechma of Contact
const ContactModel = require('../modals/contactModal')
// @desc Get Contacts
// @route GET /api/contacts
// @access private
const getContacts = asyncHandler(async (req, res) => {
    const contact = await ContactModel.find({user_id:req.user.id});
    res.status(200).json(contact);
});
// @desc Create contact
// @route POST /api/contacts
// @access private
const createContact = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!email && !name && !phone) {
        res.status(400);
        throw new Error("All fields are mandtory");
    }
    const contact = await ContactModel.create({
        name, email, phone,user_id:req.user.id
    });
    res.status(201).json(contact);
});
// @desc Get Contact
// @route GET /api/contacts
// @access private
const getContact = asyncHandler(async (req, res) => {
    const contact=await ContactModel.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }
    res.status(200).json(contact);
});
// @desc Update Contact
// @route PUT /api/contacts
// @access private
const updateContact = asyncHandler(async (req, res) => {
    const contact=await ContactModel.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }
    if(contact.user_id.toString()!== req.user.id){
        res.status(403);
        throw new Error("User don't manipulate the contact of other user");
    }
    //update Contact here
    const updateCon=await ContactModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(updateCon);
});
// @desc Delete Contact
// @route DELETE /api/contacts
// @access private
const deleteContact = asyncHandler(async (req, res) => {
    const contact=await ContactModel.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }
    if(contact.user_id.toString()!== req.user.id){
        res.status(403);
        throw new Error("User don't manipulate the contact of other user");
    }
    const deleteCon=await ContactModel.deleteOne({_id:req.params.id});
    res.status(200).json(deleteCon);
});

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
};
