const addressModel = require("../models/AddressModel")

async function createAddress(req,res){
    const body = req.body 
    body.userId = req.userId
    let address = await addressModel.create(body)
    res.status(200).json({
        msg : "okay"
    })
}
module.exports = createAddress