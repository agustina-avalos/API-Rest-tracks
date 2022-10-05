const { check, validationResult } = require("express-validator");
const validateResult = require("../utils/handlevalidator")



const validatorId=[
    check("id").exists().isMongoId(),
    (req,res,next)=>{
         validateResult(req, res, next);
    },
]

module.exports = { validatorId}