const productModel = require("../models/productModel")

async function productDetails(req,res){
    try{
        let id = req.params.id
    let product = await productModel.find({id:id})
    return res.status(200).json({
        product
    })
    }catch(e){
        return res.status(404)
    }
    
}

module.exports = productDetails