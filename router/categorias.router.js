const express = require("express");
const router = express.Router();
const controller = require("../controllers/categorias.controller");





router.get("/categorias", controller.getCategories);

router.get("/categorias:id", controller.getCategory);

router.post("/categorias", controller.createCategory);

router.put("/categorias:id", controller.updateCategory);

router.delete("/categorias:id", controller.deleteCategory);

module.exports = router;