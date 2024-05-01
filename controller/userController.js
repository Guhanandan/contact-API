const bcrypt = require('bcrypt')
const User = require('../models/userModels')

const postRegistration = async (req,res)=>{
    console.log(req.body)
    const { username , email , password} = req.body
    if(!username || !email || !password){
        res.status(400).json({message : "All fields are Mandatory!"})
    }
    const userAvailable = await User.findOne({email})
    if(userAvailable){
        res.status(400).json({message : "Email already exist!"})
    }
    const hashedPassword = await bcrypt.hash(password , 10)
    console.log(hashedPassword)
    const createdUser = await User.create({username , email , password : hashedPassword})
    if(createdUser){
        res.status(201).json({_id : createdUser.id,email:createdUser.email})
    }
    else{
        res.status(400)
        throw new Error("Erorr in Creating an user")
    }
}

const postLogin = (req,res)=>{
    res.status(200).json({message : "user Login"})
}

const getUserInfo = (req,res)=>{
    res.status(200).json({message : "user Information"})
}

module.exports = {
    postRegistration,
    postLogin,
    getUserInfo
}