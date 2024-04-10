const cartModel = require("../models/cartModel")

async function getCartProducts(req,res){
    try{
        const userId = req.userId
    const response = await cartModel.find({userId:userId})
    return res.status(200).json({
       response
    })
    }catch(e){
        return res.status(404).json({
            msg : "Error - " + e
        })
    }
    
}

module.exports = getCartProducts