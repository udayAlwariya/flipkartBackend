const express = require("express")
const { authMiddleware } = require("../middleware/auth")
const getOrderDetails = require("../controllers/getOrderDetails")
const buyRouter = express.Router()

buyRouter.get('/buy/:id/address',authMiddleware,getOrderDetails)

module.exports = buyRouter