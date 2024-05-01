const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        username : {
            type : String,
            required : [true , "Please add the user name"],
        },
        email : {
            type : String,
            required : [true , "Please add the user email address"],
            unique : [true , "This Email address was already registered"]
        },
        password : {
            type : String,
            required : [true , "Please add the password"]
        }
    },
    {
        timestamps : true
    }
)

module.exports = mongoose.model("User" , userSchema)
