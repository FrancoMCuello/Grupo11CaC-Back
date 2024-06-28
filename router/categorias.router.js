const express = require("express");
const router = express.Router();
const controller = require("../controllers/categorias.controller");
const multer = require("multer");
const path = require("path");




router.get("/categorias", controller.getCategories);

router.get("/categorias:id", controller.getCategory);

router.post("/categorias", upload.single("imagen"), controller.createCategory);

router.put("/categorias:id", controller.updateCategory);

router.delete("/categorias:id", controller.deleteCategory);

module.exports = router;