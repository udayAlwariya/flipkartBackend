const mongoose = require("mongoose")

const schema = new mongoose.Schema({

    id: {
        type : String,
<<<<<<< HEAD
        required : true
=======

>>>>>>> 7f75b4158d612a3d2687c9aeaf0d5f8997742216
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
