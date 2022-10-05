const { NONAME } = require("dns");
const express = require('express')
const router = express.Router()
const fs = require("fs");

const PATH_ROUTES = `${__dirname}`;

const removeExtension = (filename)=>{
    return filename.split('.').shift();
}

fs.readdirSync(PATH_ROUTES).filter((file)=>{
    const name = removeExtension(file);
    if(name !== "index"){
        console.log("cargando rutas");
        router.use(`/${name}`, require(`./${file}`))
    }

})






module.exports = router