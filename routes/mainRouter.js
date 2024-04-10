const express = require("express")
const productRouter = require("./productRouter")
const userRouter = require("./userRouter")
const cartRouter = require("./cartRouter")
const addressRouter = require("./addressRouter")
const buyRouter = require("./buyRouter")
const wishListRouter = require("./wishList")
const paymentRouter = require("./paymentRouter")
const ordersRouter = require("./orderRouter")

const mainRouter = express.Router()

mainRouter.use('/product',productRouter)
mainRouter.use('/user',userRouter)
mainRouter.use('/checkout',cartRouter)
mainRouter.use('/address',addressRouter)
mainRouter.use('/checkout',buyRouter)
mainRouter.use('/wish',wishListRouter)
mainRouter.use('/pay',paymentRouter)
mainRouter.use('/order',ordersRouter)

module.exports = mainRouter
