const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/productos", require("./router/productos.router"));
app.use("/categorias", require("./router/categorias.router"));
app.use("/usuarios", require("./router/usuarios.router"));

app.get("/", (req, res) => {
  res.json("Bienvenido a nuestra API. GRUPO 11");
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
