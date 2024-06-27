const db = require("../db/db");
const fs = require("fs");

const getAllCategories = (req, res) => {
    const sql = "SELECT * FROM categorias";
    db.query(sql, (errpr, rows) => {
        if (error) {
            return res.status(500).json({ error: "Intente mas tarde"});
        }
        res.json(rows);
    });
};

const getCategory = (req, res) => {
    const { id } = req.params;
    const sql = "SELECT * FROM categorias WHERE id = ?";
    db.query(sql, [id], (error, rows) => {
        if (error) {
            return res.status(500).json({ error: "Intente mas tarde"});
        }
        if (rows.length == 0) {
            return res.status(404).send({ error: "No existe esa categoría"});
        }

        console.log(req.params.id);

        res.json(rows);
    });
};

const createCategory = (req, res) => {
    const { nombre } = req.body;

    const sql = "INSERT INTO categorias (nombre) VALUES (?)";

    db.query(sql, [nombre], (error, result) => {
        if (error) {
            return res.status(500).json({ error: "Intente mas tarde"});
        }
        const categoria = { ...req.body, id: result.insertId };

        res.status(201).send(categoria);
    });
};

const updateCategory = (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;

    const sql = "UPDATE categorias SET nombre = ? WHERE id = ?";

    db.query(sql, [nombre], (error, result) => {
        if (error) {
            return res.status(500).json({ error: "Intente mas tarde"});
        }
        if (result.affectedRows == 0) {
            return res.status(404).send({ error: "No existe esa categoría"});
        }

        const categoria = { ...req.body, ...req.params};

        res.json(categoria);
    });
};

const deleteCategory = (req, res) => {
    const { id } = req.params;

    let sql = "SELECT * FROM categorias WHERE id = ?";
    db.query(sql, [id], (error, rows) => {
        if (error) {
            return res.status(500).json({ error: "Intente mas tarde"});
        }

        if (rows.length == 0) {
            return res.status(404).send ({ error: "No existe esa categoria"});
        }

        console.log(req.params.id);

        res.json(rows);
        fs.unlinkSync(path.resolve(__dirname, "../upload/", rows[0].image));
    });

    sql = "DELETE FROM categorias WHERE id = ?";
    db.query(sql, [id], (error, result) => {
        if (error) {
            return res.status(500).json({ error: "Intente mas tarde"});
        }
        if (result.affectedRows == 0) {
            return res.status(404).send({ error: "Nop existe esa categoria"});
        }
        res.json({ mensaje: "Categoria eliminada"});
    });
};

module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
};

