const productModel = require("../models/productModel")

async function getOrderDetails(req,res){
    try{
    let id = req.params.id
    let response = await productModel.find({id:id})
    return res.status(200).json({
        response
    })
    }catch(e){
        return res.status(404)
    }
}

module.exports = getOrderDetails