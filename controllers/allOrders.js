const orderModel = require("../models/orderModel")

async function allOrders(req,res){
    const userId = req.userId
    const orders = await orderModel.find({userId:userId})
    return res.status(200).json({
        orders
    })
}

module.exports = allOrders