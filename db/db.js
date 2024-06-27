const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "mysql-francocuello.alwaysdata.net",
  user: "366526_grupo11",
  password: "Grupo11.CaC",
  database: "francocuello_grupo11cac",
});

connection.connect((error) => {
  if (error) {
    return console.error(error);
  }
  console.log("Conectado");
});

module.exports = connection;
