const express = require("express")
const addToCart = require("../controllers/addToCart")
const {authMiddleware} = require("../middleware/auth")
const getCartProducts = require("../controllers/getCartProducts")
const removeFromCart = require("../controllers/removeFromCart")
const removeProduct = require("../controllers/removeProduct")
const emptyCart = require("../controllers/emptyCart")

const cartRouter = express.Router()

cartRouter.post('/addToCart/:id',authMiddleware,addToCart)
cartRouter.get('/cart/address',authMiddleware,getCartProducts)
cartRouter.post('/removeItem/:id',authMiddleware,removeFromCart)
cartRouter.delete('/removeProduct/:id',authMiddleware,removeProduct)
cartRouter.delete('/removeAll',authMiddleware,emptyCart)


module.exports = cartRouter