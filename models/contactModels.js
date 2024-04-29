const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , "Please provide name"]
    },
    email : {
        type : String,
        required : [true , "Please provide email"]
    },
    phone : {
        type : Number,
        required : [true , "Please provide Phone number"]
    }
})

const contact = mongoose.model("Contact" , contactSchema)

module.exports = contact