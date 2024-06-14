const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Franco.7jumio",
  database: "bd_grupo11_coc",
});

connection.connect((error) => {
  if (error) {
    return console.error(error);
  }
  console.log("Conectado");
});

module.exports = connection;
