const { UserValidation, signinValidation } = require("../config/zod")
const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")
require("dotenv").config()

async function signin(req,res){
    try{
    const {email,password} = req.body
    const response = signinValidation.safeParse({email,password})
    if(response.success){
        let userExists = await userModel.findOne({email})
        if(userExists){
            let payload = {
                userId : userExists._id,
                isAdmin : userExists.isAdmin
            }
            let token = jwt.sign(payload,process.env.SECRET)
            return res.status(200).json({
                token
            })
        }
    }else{
        return res.status(404).json({
            msg : "Invalid Inputs"
        })
    }
    }catch(e){
        return res.status(404).json({
            msgs : e
        })
    }
    
}

module.exports = signin