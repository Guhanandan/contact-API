

const postRegistration = (req,res) => {(req,res)=>{
    res.status(200).json({message : "Registeration"})
}}

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