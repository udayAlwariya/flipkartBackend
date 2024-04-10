const orderModel = require("../models/orderModel")

async function specificOrder(req,res){
    try{
    const userId = req.userId
    const id = req.params.id
    const order = await orderModel.findOne({_id:id,userId:userId})
    return res.status(200).json({
        order
    })
    }catch(e){
        return res.status(404).json({
            msg : e
        })
    }
    
}

module.exports = specificOrder