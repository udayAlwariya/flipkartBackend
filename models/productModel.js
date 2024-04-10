const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    id: {
        type : String,
        unique : true
    },
        url: String,
        detailUrl: String, 
        title: Object,
        price: Object,
        quantity: Number,
        description : String,
        discount: String, 
        tagline: String 
})

const productModel = mongoose.model('productCollection',Schema)

module.exports = productModel