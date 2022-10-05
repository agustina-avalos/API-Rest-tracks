const express = require("express");
const router = express.Router();
const {upload} = require("../utils/handleStorage")
const {getItems, createItem,getItem,deleteItem} = require("../controllers/storage")
const {validatorId} = require("../validator/storage")
router.get("/",getItems);

router.get("/:id", validatorId,getItem);

//si enviamos varios archivos en vez de single se usa "multi"
router.post("/", upload.single("file") ,createItem)

router.delete("/:id", validatorId,deleteItem)




module.exports = router;