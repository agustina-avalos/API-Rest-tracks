const {handlehttpError} = require("../utils/handleError")
 
const checkRole = (roles)=> (req,res,next)=>{
    try{
        const { user }= req;
        const rolesbyUser = user.role;
        const check = roles.some((roleSingle)=> rolesbyUser.includes(roleSingle))
            if(!check){
                handlehttpError(res, "user not permission",403);
                return
            }
        next()
    }catch(err){
        handlehttpError(res, "error permission",403)
    }


}



module.exports = {checkRole}