const {z} =  require("zod")

const UserValidation = z.object({
    firstName : z.string().trim(),
    lastName : z.string().trim(),
    email : z.string().email().trim(),
    password : z.string().min(8).trim()
})

const signinValidation = z.object({
    email : z.string().trim(),
    password : z.string().min(8).trim()
})
module.exports = {UserValidation,signinValidation}