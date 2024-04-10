const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "userCollection"
    },
    address : Object,
    cartItems : Array

})

const orderModel = mongoose.model("orderCollection",schema)

module.exports = orderModel