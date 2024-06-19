const db = require("../db/db");
const fs = require("fs");

const getAllProduct = (req, res) => {
  const sql = "SELECT * FROM productos";
  db.query(sql, (error, rows) => {
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }
    res.json(rows);
  });
};

const getProduct = (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM productos WHERE id = ?";
  db.query(sql, [id], (error, rows) => {
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }

    if (rows.length == 0) {
      return res.status(404).send({ error: "No existe ese producto" });
    }

    console.log(req.params.id);

    res.json(rows);
  });
};

const createProduct = (req, res) => {
  let imageName = "";

  if (req.file) {
    imageName = req.file.filename;
  }

  const { nombre, precio, stock } = req.body;

  const sql =
    "INSERT INTO productos (nombre, precio, stock, imagen) VALUES (?, ?, ?, ?)";

  db.query(sql, [nombre, precio, stock, imageName], (error, result) => {
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }
    const producto = { ...req.body, id: result.insertId };

    res.status(201).send(producto);
  });
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { nombre, precio, stock } = req.body;

  const sql =
    "UPDATE productos SET nombre = ? precio = ? stock = ? WHERE id = ?";

  db.query(sql, [nombre, precio, stock, id], (error, result) => {
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }
    if (result.affectedRows == 0) {
      return res.status(404).send({ error: "No existe ese producto" });
    }

    const producto = { ...req.body, ...req.params };

    res.json(producto);
  });
};

const deleteProduct = (req, res) => {
  const { id } = req.params;

  let sql = "SELECT * FROM productos WHERE id = ?";
  db.query(sql, [id], (error, rows) => {
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }

    if (rows.length == 0) {
      return res.status(404).send({ error: "No existe ese producto" });
    }

    console.log(req.params.id);

    res.json(rows);
    fs.unlinkSync(path.resolve(__dirname, "../uploads/", rows[0].imagen));
  });

  sql = "DELETE FROM productos WHERE id = ?";
  db.query(sql, [id], (error, result) => {
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }
    if (result.affectedRows == 0) {
      return res.status(404).send({ error: "No existe ese producto" });
    }

    res.json({ mensaje: "Producto eliminado" });
  });
};

module.exports = {
  getAllProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
