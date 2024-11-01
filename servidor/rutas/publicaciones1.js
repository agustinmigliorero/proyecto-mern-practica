const express = require("express");
const rutas = express.Router();
const {
  crearPublicacion,
  mostrarPublicaciones,
} = require("../controladores/publicacion1");

rutas.get("/", mostrarPublicaciones);
// rutas.get("/", mostrarPublicaciones);
rutas.post("/", crearPublicacion);

module.exports = rutas;
