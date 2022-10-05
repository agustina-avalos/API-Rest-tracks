
const {matchedData} = require("express-validator");
const {encript, compare} = require("../utils/handlepassword.")
const {Tokensign} = require ("../utils/handlejwt")
const {usersModel} = require("../models")
const {handlehttpError} = require("../utils/handleError")


const register = async (req,res) =>{
    try{
        req = matchedData(req)
        const password = await encript(req.password);
        const body = {...req, password} ///duplicamos la informacion y agregamos y/o sobreescribimos password ya hasheada
        const dataUsuario = await usersModel.create(body);
    
        const data = {
            token: await Tokensign(dataUsuario),
            user:dataUsuario
        }
        res.send({data})

    }catch(err){
        handlehttpError(res,err);
    }
   
}


const login = async(req,res)=>{
    try{
        body = matchedData(req);
        const user = await usersModel.findOne({email: body.email})
        if(!user){
            return handlehttpError(res, "user no exist",404);
        }

        const check = await compare(body.password, user.password);
        if(!check){
            return handlehttpError(res, "invalid password", 401);
        }

        const tokenJwt = await Tokensign(user);
        const data = {
            token: tokenJwt,
            user: {user}
        }
        res.send(data);

    }catch(err){
        handlehttpError(res ,err)
    }

}





module.exports = {register,login}