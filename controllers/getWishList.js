const wishListModel = require("../models/wishlistModel");

async function getWishList(req,res){
    try{
    const userId = req.userId
    const wishList = await wishListModel.find({userId:userId})
    return res.status(200).json({
        wishList
    })
    }catch(e){
        return res.status(404).json({
            msg : e
        })
    }  
}

module.exports = getWishList