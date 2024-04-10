const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    id: {
        type : String,

    },
    price : {
        type : Object,
        required : true
    },
    title : {
        type : Object,
        required : true,
    },
    discount : {
        type : String,
        required : true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "userCollection"
    },
    url : {
        type : String,
        required : true
    }
})

const wishListModel = mongoose.model("wishlistCollection",schema)

module.exports = wishListModel
