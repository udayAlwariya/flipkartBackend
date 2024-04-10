const mongoose = require("mongoose")
require("dotenv").config()
const db = () =>{
    try{
        mongoose.connect(process.env.DB_URL)
        console.log("Connected successfully")
    }catch(e){
        console.log("Error - "+ e)
    }
}

module.exports = db