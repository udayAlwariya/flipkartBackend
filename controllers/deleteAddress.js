const addressModel = require("../models/AddressModel")

async function deleteAddress(req,res){
    try{
        const id = req.params.id
        const userId = req.userId
        await addressModel.findOneAndDelete({_id:id,userId:userId})
        return res.status(200).json({
            msg : "success"
        })
    }catch(e){
        return res.status(404).json({
            msg : e
        })
    }
   
}

module.exports = deleteAddress