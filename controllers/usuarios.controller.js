const db = require("../db/db");
const fs = require("fs");

const getAllUsuarios = (req, res) => {
  const sql = "SELECT * FROM usuarios";
  db.query(sql, (error, rows) => {
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }
    res.json(rows);
  });
};

const getUsuario = (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM usuarios WHERE id = ?";
  db.query(sql, [id], (error, rows) => {
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }
    if (rows.length == 0) {
      return res.status(404).send({ error: "No existe ese usuario" });
    }

    console.log(req.params.id);

    res.json(rows);
  });
};

const createUsuario = (req, res) => {
  const { nombre, apellido, admin } = req.body;

  const sql = "INSERT INTO usuarios (nombre, apellido, admin) VALUES (?,?,?)";

  db.query(sql, [nombre, apellido, admin], (error, result) => {
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }
    const usuario = { ...req.body, id: result.insertId };

    res.status(201).send(usuario);
  });
};

const updateUsuario = (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, admin } = req.body;

  const sql =
    "UPDATE usuarios SET nombre = ?, apellido = ?, admin = ? WHERE id = ?";

  db.query(sql, [nombre, apellido, admin, id], (error, result) => {
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }
    if (result.affectedRows == 0) {
      return res.status(404).send({ error: "No existe ese usuario" });
    }

    const usuario = { ...req.body, ...req.params };

    res.json(usuario);
  });
};

const deleteUsuario = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM usuarios WHERE id = ?";
  db.query(sql, [id], (error, result) => {
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }
    if (result.affectedRows == 0) {
      return res.status(404).send({ error: "No existe ese usuario" });
    }
    res.json({ mensaje: "Usuario eliminado" });
  });
};

module.exports = {
  getAllUsuarios,
  getUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};
