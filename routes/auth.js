const express = require("express");
const router = express.Router();
const {register,login} = require("../controllers/auth")
const {validateRegister, validatorLogin} = require("../validator/auth")



router.post("/register",validateRegister,register)




router.post("/login",validatorLogin,login)






module.exports = router;