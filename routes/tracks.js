const express = require("express");
const router = express.Router();
const {validateObjectDataCreate, validatorId, validateObjectDataUpdate} = require("../validator/tracks")
const {getItems, createItem,getItem,updateItem,deleteItem} = require("../controllers/tracks")
const {authmiddleware} = require("../middleware/session")
const {checkRole} = require("../middleware/check")

router.get("/", authmiddleware,checkRole(["admin"]),getItems)

router.get("/:id",validatorId,authmiddleware,getItem)

router.post("/", validateObjectDataCreate ,authmiddleware,checkRole(["admin"]),createItem)

router.put("/:id", validateObjectDataCreate,validatorId , authmiddleware,checkRole,updateItem)

router.delete("/:id",validatorId,authmiddleware,checkRole,deleteItem)



module.exports = router;