const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "userCollection"
    },
    name : {
        type : String,
        required : true
    },
    mobile : {
        type : Number,
        required : true
    },
    pincode : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    town : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    }
})


const addressModel = mongoose.model("addressCollection",Schema)

module.exports = addressModel