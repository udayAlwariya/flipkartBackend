const productModel = require("../models/productModel")
async function allProducts(req,res){
    try{
        let products = await productModel.find({})
        return res.status(200).json({
            msg : products
        })
    }catch(e){
        console.log(e)
    }

}

module.exports = allProducts