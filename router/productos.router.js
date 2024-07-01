const express = require("express");
const router = express.Router();
const controller = require("../controllers/productos.controller");
const multer = require("multer");
const path = require("path");

router.get("/", controller.getAllProduct);

router.get("/:id", controller.getProduct);

router.post("/", /*  upload.single("imagen"), */ controller.createProduct);

router.put("/:id", controller.updateProduct);

router.delete("/:id", controller.deleteProduct);

module.exports = router;

/* const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpg||jpeg||png/;

    const minetype = fileTypes.test(file.mimetype);

    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    if (mimetype && extname) {
      cb(null, true);
    }
    cb("Error de archivo no soportado");
  },
  limits: { fileSize: 1024 * 1024 * 1 }, // 1 mb
}); */
