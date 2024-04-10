const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    firstName : {
        required : true,
        type : String
    },
    lastName : {
        required : true,
        type : String
    },
    email : {
        required : true,
        type : String
    },
    password : {
        required : true,
        type : String
    },
    isAdmin : {
        type : Boolean,
        default : false
    }
})

const userModel = mongoose.model('userCollection',Schema)

module.exports = userModel