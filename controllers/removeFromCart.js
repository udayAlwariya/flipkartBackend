const cartModel = require("../models/cartModel")

async function removeFromCart(req,res){

    try{
        const id = req.params.id

        const userId = req.userId
    
        let product = await cartModel.findOne({id : id,userId:userId})
    
        if(product.quantity>1){
            let updatedCartItem = await cartModel.findOneAndUpdate({id:id,userId:userId},{
                $inc : {
                    quantity : -1
                }
            })
            return res.status(200).json({
                updatedCartItem
            })
        }
        else{
            let item = await cartModel.findOneAndDelete({id:id,userId:userId})
            return res.status(200).json({
                item
            })
        }
    }catch(Error){
        return res.status(404).json({
            msg : Error
        })
    }
}
module.exports = removeFromCart