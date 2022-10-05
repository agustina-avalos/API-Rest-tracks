const bcryptjs = require("bcrypt");



///encripto la contraseña del usuario que se pasa por parametro
const encript = async(passwordPlain, )=>{
    const hash = await bcryptjs.hash(passwordPlain, 10) //2do parametro para que sea mas aleatorio si pongo un numero mas grande tarda un poco mas
    return hash;
}


/// comparamos si la contraseña que ingresa el usuario es igual a la que encriptamos
const compare = async (passwordPlain, hashPassword)=>{
    return await bcryptjs.compare(passwordPlain, hashPassword)
}



module.exports = {encript, compare}