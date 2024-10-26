const express = require("express");
const rutas = express.Router();
const {
  verPublicaciones,
  crearPublicacion,
} = require("../controladores/publicaciones");

rutas.get("/", verPublicaciones);

rutas.post("/", crearPublicacion);

module.exports = rutas;
