const express = require("express")
const Razorpay = require('razorpay')
const cors = require("cors")
const db = require("./config/db")
const defaultData = require("./config/defaultData")
const mainRouter = require("./routes/mainRouter")
require("dotenv").config()
const app = express()
app.use(express.json())
app.use(cors())
db()
app.use(mainRouter)

app.listen(process.env.PORT || 3005)

defaultData()