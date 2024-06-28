const express = require("express");
const router = express.Router();
const controller = require("../controllers/usuarios.controller");
const multer = require("multer");
const path = require("path");




router.get("/usuarios", controller.getUsuario);

router.get("/usuarios:id", controller.getUsuario);

router.post("/usuarios", upload.single("imagen"), controller.createUsuario);

router.put("/usuarios:id", controller.updateUsuario);

router.delete("/usuarios:id", controller.deleteUsuario);

module.exports = router;