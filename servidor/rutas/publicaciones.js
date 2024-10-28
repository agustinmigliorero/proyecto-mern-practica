const express = require("express");
const rutas = express.Router();
const {
  verPublicaciones,
  verPublicacion,
  crearPublicacion,
} = require("../controladores/publicaciones");

rutas.get("/", verPublicaciones);
rutas.get("/:id", verPublicacion);

rutas.post("/", crearPublicacion);

module.exports = rutas;
