const router = require('express').Router()
const controller=require("../controller/controller")

router.get("/products",controller.getAllData)
router.get("/products/:id",controller.getById)
router.post("/products",controller.postData)
router.delete("/products/:id",controller.deleteById)
router.patch("/products/:id",controller.patchById)
router.put("/products/:id",controller.putById)

module.exports=router