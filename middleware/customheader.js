const customHeader = (req,res,next)=>{
    try{
        const apykey = req.headers.api_key;
        if(apykey === "agustina00"){
            next()
        }else{
            res.status(403);
            res.send("apikey incorrecta")
        }

    }catch(err){
        res.status(403);
        res.send({err: "ocurrio un error"})
    }
}