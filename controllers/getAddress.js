const addressModel = require("../models/AddressModel")

async function getAddress(req,res){
    try{
        const userId = req.userId
        const adresses = await addressModel.find({userId})
        return res.status(200).json({
            adresses
        })
    }catch(e){
        return res.status(404)
    }
}

module.exports = getAddress