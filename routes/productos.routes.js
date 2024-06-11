const express = require("express");
const router = express.Router();

const productos = [{ id: 1, nombre: "Producto 1", stock: 10 }];

router.get("/", (req, res) => {
  res.json(productos);
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);

  const producto = productos.find((elemento) => elemento.id === req.params.id);
  if (!producto) {
    return res.status(404).send({ error: "No existe ese producto" });
  }
  res.json(producto);
});

router.post("/", (req, res) => {
  console.log(req.body);

  const producto = {
    id: productos.length + 1,
    nombre: req.body.nombre,
    stock: req.body.stock,
  };

  productos.push(producto);

  res.status(201).send(producto);
});

router.put("/:id", (req, res) => {
  console.log(req.params);
  console.log(req.body);

  const producto = productos.find((elemento) => elemento.id === req.params.id);
  if (!producto) {
    return res.status(404).send({ error: "No existe ese producto" });
  }

  producto.nombre = req.body.nombre;
  producto.stock = req.body.stock;

  res.send(producto);
});

router.delete("/:id", (req, res) => {
  console.log(req.params);

  const producto = productos.find((elemento) => elemento.id === req.params.id);
  if (!producto) {
    return res.status(404).send({ error: "No existe ese producto" });
  }

  const productoIndex = productos.findIndex(
    (elemento) => elemento.id === req.params.id
  );

  productos.splice(productoIndex, 1);

  res.send(producto);
});

module.exports = router;
