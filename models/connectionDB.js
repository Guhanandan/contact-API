require('dotenv').config()

const mongoose = require('mongoose')

const connectDB =async () => {
    try{
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Connected to the DATABASE...")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectDB