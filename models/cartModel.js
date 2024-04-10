const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    id : String,
    url : String,
    title: Object,
    price: Object,
    quantity: Number,
    discount: String, 
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "userCollection"
    }
})

const cartModel = mongoose.model("cartCollection",Schema)

module.exports = cartModel