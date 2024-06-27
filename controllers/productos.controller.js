const db = require("../db/db");

const index = (req, res) => {
    const sql = "SELECT * FROM Productos";
    db.query(sql, (error, rows) => {
        if (error) {
            return res.status(500).json({error: "Intente mas tarde"});
        }
        res.json(productos);
    });
};

module.exports = {
    index,
};