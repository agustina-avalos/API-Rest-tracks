const { check, validationResult } = require("express-validator");
const validateResult = require("../utils/handlevalidator")

const validateRegister = [
    check("name").exists().notEmpty(),
    check("age").exists().notEmpty().isNumeric({ min: 12, max: 99 }),
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({min:8, max:15}),
    (req, res, next) => {
      validateResult(req, res, next);
    },
  ];
  

const validatorLogin=[
    check("email").exists().notEmpty(),
    check("password").exists().notEmpty(),
    (req,res,next)=>{
         validateResult(req, res, next);
    },
]



module.exports = {validateRegister, validatorLogin}