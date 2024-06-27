const express = require("express");
const app = express();



const PORT = 3000;

app.use("/productos", require("./router/productos.router"));

app.get("/", (req, res) => {
  res.json("Funciona");
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
