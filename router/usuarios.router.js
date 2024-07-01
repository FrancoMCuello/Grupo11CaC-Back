const express = require("express");
const router = express.Router();
const controller = require("../controllers/usuarios.controller");





router.get("/usuarios", controller.getUsuario);

router.get("/usuarios:id", controller.getUsuario);

router.post("/usuarios", controller.createUsuario);

router.put("/usuarios:id", controller.updateUsuario);

router.delete("/usuarios:id", controller.deleteUsuario);

module.exports = router;