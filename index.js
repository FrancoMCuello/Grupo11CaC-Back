require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use("/productos", require("./router/productos.router"));
app.use("/categorias", require("./router/categorias.router"));
app.use("/usuarios", require("./router/usuarios.router"));
app.use("/auth", require("./router/auth.router"));
const users = require("./models/user.model");

app.get("/", (req, res) => {
  res.json("Bienvenido a nuestra API. GRUPO 11");
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
