const {handlehttpError} = require("../utils/handleError");
const {verifyToken} = require("../utils/handlejwt")

const authmiddleware =  async (req,res,next) =>{
    try{
        if(!req.headers.authorization){
            handlehttpError(res,"not_token" , 401);
            return
        }
        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token)

        if(dataToken._id){
            next()

        }else{
            handlehttpError(res, "error id token", 403)
        }

   

    }catch(err){
        handlehttpError(res,err)
    }
}
    module.exports = {authmiddleware}