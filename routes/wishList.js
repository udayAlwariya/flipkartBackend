const express = require("express")
const postWish = require("../controllers/postWish")
const { authMiddleware } = require("../middleware/auth")
const getWishList = require("../controllers/getWishList")
const getSpecificWish = require("../controllers/getSpecificWish")
const deleteWish = require("../controllers/deleteWish")
const wishListRouter = express.Router()

wishListRouter.post('/postWish',authMiddleware,postWish)
wishListRouter.get('/getWish',authMiddleware,getWishList)
wishListRouter.get('/getSpecificWish/:id',authMiddleware,getSpecificWish)
wishListRouter.delete('/deleteWish/:id',authMiddleware,deleteWish)

module.exports = wishListRouter