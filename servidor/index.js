const express = require("express");
const app = express();
const puerto = 3000;
const mongoose = require("mongoose");
const rutas = require("./rutas/rutas.js");
const rutasPublicaciones = require("./rutas/publicaciones.js");

app.use(express.json());

//Conexion DB

mongoose
  .connect("mongodb://localhost:27017/prueba-express")
  .then(() => console.log("Conexion Exitosa"));
//Conexion DB

app.use("/", rutas);

app.use("/publicaciones", rutasPublicaciones);

app.listen(puerto, function () {
  console.log("Servidor corriendo en http://localhost:" + puerto);
});
