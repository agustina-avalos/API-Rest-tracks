const jsonwebtoken = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET

const Tokensign = async (user)=>{
    const sign = jsonwebtoken.sign(
        {
            _id: user._id,
            role: user.role,
        },
        JWT_SECRET,
        {
            expiresIn:"2h",
        }
    )
    return sign;
}


const verifyToken = async(jwtToken)=>{
    try{
        return jsonwebtoken.verify(jwtToken, JWT_SECRET)

    }catch(err){
        return(err)
    }

}

module.exports = {Tokensign , verifyToken}