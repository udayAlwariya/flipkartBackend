const {signinValidation} = require("../config/zod");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function signin(req, res) {
  try {
    const { email, password } = req.body;
    const response = signinValidation.safeParse({ email, password });
    if (response.success) {
      let emailExists = await userModel.findOne({ email });
      if (emailExists) {
        let userExists = await userModel.findOne({ email, password });
        if (userExists) {
          let payload = {
            userId: userExists._id,
            isAdmin: userExists.isAdmin,
          };
          let token = jwt.sign(payload, process.env.SECRET);
          return res.status(200).json({
            token,
          });
        } else {
          return res.status(404).json({
            message: "Wrong Password",
          });
        }
      } else {
        return res.status(404).json({
          message: "Email doesn't exists",
        });
      }
    } else {
      return res.status(404).json({
        message: response.error.errors[0].message,
      });
    }
  } catch (e) {
    return res.status(404).json({
      message: "Something Broke",
    });
  }
}

module.exports = signin;
