const cartModel = require("../models/cartModel")

async function removeProduct(req,res){
    try{
        const id = req.params.id
        const userId = req.userId
        let item = await cartModel.findOneAndDelete({id:id,userId:userId})
            return res.status(200).json({item})
    }catch(Error){
        return res.status(404).json({
            msg : Error
        })
    }
}
module.exports = removeProduct