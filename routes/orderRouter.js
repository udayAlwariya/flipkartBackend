const express = require("express")
const allOrders = require("../controllers/allOrders")
const { authMiddleware } = require("../middleware/auth")
const specificOrder = require("../controllers/specificOrderDetails")

const ordersRouter = express.Router()

ordersRouter.get("/allOrders",authMiddleware,allOrders)
ordersRouter.get('/orderDetails/:id',authMiddleware,specificOrder)

module.exports = ordersRouter