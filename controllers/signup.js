const {UserValidation} = require("../config/zod")
const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")
require("dotenv").config()

async function signup(req,res){
    try{
        const {firstName,lastName,email,password} = req.body
        const response = UserValidation.safeParse({firstName,lastName,email,password})
        if(response.success){
            let userExists =await userModel.findOne({email:email})
            if(userExists){
                return res.status(404).send("Email already exists")
            }
            let user = await userModel.create({
                firstName,lastName,email,password
            })
            let payload = {
                userId : user._id,
                isAdmin : user.isAdmin
            }
            let token = jwt.sign(payload,process.env.SECRET)
          
            return res.status(200).json({
                token
            })
        }else{
            res.status(404).send("Error")
        }
    }catch(e){
        return res.status(404).send("Invalid inputs")
    }
   

}

async function Authentication(req,res){
    let authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(404).json({
            msg : "Token not Found"
        })
    }
    let token = authHeader.split(" ")[1]
    try{
        let decoded = jwt.verify(token,process.env.SECRET)
        return res.status(200).json({
            msg : "Valid Token"
        })
    }catch(e){
        return res.status(404).json({
            msg : "Invalid Token"
        })
}
}
module.exports = {signup,Authentication}