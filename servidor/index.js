const express = require("express");
const app = express();
const puerto = 3000;
const rutas = require("./rutas/rutas.js");

app.use("/", rutas);

app.listen(puerto, function () {
  console.log("Servidor corriendo en http://localhost:" + puerto);
});
