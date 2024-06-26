const express = require("express");
const router = express.Router();
const controller = require("../controllers/productos.controller");

router.get("/", controller.getAllProduct);

router.get("/:id", controller.getProduct);

router.post("/", controller.createProduct);

router.put("/:id", controller.updateProduct);

router.delete("/:id", controller.deleteProduct);

module.exports = router;
