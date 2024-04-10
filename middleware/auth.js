const jwt = require("jsonwebtoken")
async function authMiddleware(req,res,next){
    let authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(404).json({
            msg : "Token not Found"
        })
    }
    let token = authHeader.split(" ")[1]
    try{
        let decoded = jwt.decode(token,process.env.SECRET)
        req.userId = decoded.userId
        next()
    }catch(e){
        return res.status(404).json({
            msg : "Invalid Token"
        })
}
}

module.exports = {authMiddleware}