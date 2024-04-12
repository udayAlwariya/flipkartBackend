const wishListModel = require("../models/wishlistModel")

async function postWish(req,res){
    // try{
        let {id,price,title,discount,url} = req.body
        let userId = req.userId
        let wish = await wishListModel.create({
            id,price,title,discount,userId,url
        })
        console.log(wish)
        return res.status(200).json({
            msg : "success"
        })
    // // }catch(e){
    //     return res.status(404).json({
    //         msg : e
    //     })
    // // }
   
}

module.exports = postWish