const Contact = require('../models/contactModels')

const getContacts =  async (req,res)=>{
    try{
        const contacts = await Contact.find({})
        res.status(200).send(contacts)
    }
    catch(err){
        console.log(err)
        res.status(500).send({meesage : "Error occured"})
    }
}

const getContact = async (req,res)=>{
    try{
        const {id} = req.params
        
        const contact = await Contact.findById(id)
        res.status(200).send(contact)
    }
    catch(err){
        res.status(500).send(err)
        res.status(500).send({meesage : "Error occured"})
    }
}

const postContact = async (req,res)=>{
    try{
        const contact = await Contact.create(req.body)
        res.status(200).send(contact)
    }
    catch(err){
        console.log(err)
        res.status(500).send({meesage : "Error occured"})
    }
}

const updateContact = async (req,res)=>{
    try{
        const {id} = req.params
        const contact = await Contact.findByIdAndUpdate(id,req.body,{new : true})
        res.status(200).send(contact)
    }
    catch(err){
        console.log(err)
        res.status(500).send({meesage : "Error occured"})
    }
}

const deleteContact = async (req,res)=>{
    try{
        const {id} = req.params
        await Contact.findByIdAndDelete(id)
        const contacts = await Contact.find({})
        res.status(200).send(contacts)
    }
    catch(err){
        console.log(err)
        res.status(500).send({meesage : "Error occured"})
    }
}

module.exports = {
    getContact,
    getContacts,
    updateContact,
    deleteContact,
    postContact
}