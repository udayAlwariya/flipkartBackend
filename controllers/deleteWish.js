const wishListModel = require("../models/wishlistModel")

const deleteWish = async(req,res)=>{
    try{
    let id = req.params.id
    let userId = req.userId
    let deleteWish = await wishListModel.findOneAndDelete({userId:userId,id:id})
    return res.status(200).json({
        msg : deleteWish
    })
    }catch(e){
        return res.status(404).json({
            msg : e
        })
    }
}

module.exports = deleteWish