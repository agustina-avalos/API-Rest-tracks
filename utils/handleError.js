const handlehttpError=(res, message = "algo sucedios", code = 403)=>{
    res.status(code);
    res.send({error:message})
}

 


module.exports =  {handlehttpError}