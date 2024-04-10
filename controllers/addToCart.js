const cartModel = require("../models/cartModel")
const productModel = require("../models/productModel")

async function addToCart(req,res){

    try{
    const id = req.params.id
    const userId = req.userId
    const product = await productModel.findOne({id : id})
    let productExist =await cartModel.findOne({id : id,userId:userId})
    if(productExist){
        let updatedCartItem = await cartModel.findOneAndUpdate({id:id,userId:userId},{
            $inc : {
                quantity : +1
            }
        })
        return res.status(200).json({
            updatedCartItem
        })
    }else{
        let cartItem = await cartModel.create({
            id : product.id,
            title: product.title,
            price: product.price,
            url : product.url,
            quantity: product.quantity,
            discount: product.discount, 
            userId : userId
        })
    
        return res.status(200).json({
            cartItem
        })
    }
   
    }catch(Error){
        return res.status(404).json({
            msg : Error
        })
        
    }
}
module.exports = addToCart