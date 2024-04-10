const productModel = require("../models/productModel");
const products = require("./data");

const defaultData = async()=> {
    try{
        await productModel.insertMany(products)
    }catch(e){
        console.log("Error"+e)
    }
}

module.exports = defaultData