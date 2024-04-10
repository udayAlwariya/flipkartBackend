const express = require("express")
const {signup, Authentication} = require("../controllers/signup")
const signin = require("../controllers/signin")
const userRouter = express.Router()

userRouter.post('/signup',signup)
userRouter.get('/auth',Authentication)
userRouter.post('/signin',signin)

module.exports = userRouter

