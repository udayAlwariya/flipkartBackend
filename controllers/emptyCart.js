const cartModel = require("../models/cartModel")

async function emptyCart(req,res){
    try{
        const userId = req.userId
        await cartModel.deleteMany({userId : userId})
        return res.status(200).json({
            msg : "Deleted SuccessFully"
        })
    }catch(e){
        return res.status(404).json({
            msg : e
        })
    }
   
}

module.exports = emptyCart