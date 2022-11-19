const User = require('../models/User')
const bcrypt = require('bcrypt')

const handleNewUser = async(req, res)=>{
    const{user, pwd} = req.body
    if(!user || !pwd) return  res.status(400).json({'message':"User name and password are required"})

    const duplicate = await User.findOne({email: user.email}).exac()
    if(duplicate) return res.sendStatus(409)

    try{
        const hashPwd = await bcrypt.hash(pwd, 10)

        const result =await User.create({
            "firstname": user.firstname
            "lastname": user.lastname
            "email":user.email
            "password": user.hashedPwd
        })
        console.log(result)
        res.status(201).json({"succes": "user was created"})
    }catch(err){
        res.status(500).json({'message':err.message})
    }
}
module.exports = {handleNewUser}