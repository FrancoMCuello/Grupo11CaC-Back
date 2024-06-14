const db = require("../db/db");

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
  const { nombre, precio, stock } = req.body;

  const sql = "INSERT INTO productos (nombre, precio, stock) VALUES (?, ?, ?)";

  db.query(sql, [nombre, precio, stock], (error, result) => {
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

  const sql = "DELETE FROM productos WHERE id = ?";
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
