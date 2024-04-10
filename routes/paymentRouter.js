const express = require("express")
const {orderCheckout,paymentVerification} = require("../controllers/payment")
const { authMiddleware } = require("../middleware/auth")

const paymentRouter = express.Router()

paymentRouter.post('/checkout/order',authMiddleware,orderCheckout)
paymentRouter.post('/verify',authMiddleware,paymentVerification)

module.exports = paymentRouter