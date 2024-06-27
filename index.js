const express = require("express");
const app = express();

<<<<<<< HEAD
const server = http.createServer((req, res) => {
    res.end('Prueba!');
});
=======
app.use(express.json());
>>>>>>> origin/develop

const PORT = 3000;

app.use("/productos", require("./router/productos.router"));

app.get("/", (req, res) => {
  res.json("Funciona");
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
