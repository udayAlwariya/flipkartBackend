const express = require("express")
const allProducts = require("../controllers/allProducts")
const productDetails = require("../controllers/productDetails")

const productRouter = express.Router()

productRouter.get('/allProducts',allProducts)
productRouter.get('/productDetails/:id',productDetails)

module.exports = productRouter