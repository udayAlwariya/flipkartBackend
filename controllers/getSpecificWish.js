const wishListModel = require("../models/wishlistModel")

async function getSpecificWish(req,res){
    try{
    const id = req.params.id
    const userId = req.userId
    const wish = await wishListModel.findOne({id:id,userId:userId})
    return res.status(200).json({
        wish
    })
    }catch(e){
        return res.status(404).json({
            msg : e
        })
    } 
}

module.exports = getSpecificWish