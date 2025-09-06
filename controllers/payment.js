const Razorpay = require('razorpay')
const crypto = require("crypto")
const orderModel = require('../models/orderModel')
async function orderCheckout(req,res){
    try{
        const amount = req.body.totalPrice
        const razorpay = new Razorpay({
            key_id: 'rzp_test_REKOh21e8dZ9Dh',
            key_secret: 'JZT75ylKWQzSyDfYH5VPlZb7'
        })
    
        const options = {
            amount : Number(amount*100),
            currency : "INR"
        }
    
        const order = await razorpay.orders.create(options)
        return res.status(200).json({
            order
        })
    }catch(e){
        console.log("Error is " + e) 
    }
   
}

const paymentVerification  = async (req,res)=>{
    const {razorpay_payment_id,razorpay_order_id,razorpay_signature,cartItems,selectedAdress} = req.body
    const userId = req.userId
    const Body = razorpay_order_id + "|" + razorpay_payment_id

    const expectedSign = crypto.createHmac("sha256","BLMNCbrtnSRrOmJJtZDuA7xz")
    .update(Body.toString())
    .digest("hex")
    if(razorpay_signature === expectedSign){
        let order = await orderModel.create({
            userId:userId,
            address:selectedAdress,
            cartItems : cartItems  
        })
        res.status(200).json({
            msg : "Order Created"
        })
    }
}

module.exports = {orderCheckout,paymentVerification}