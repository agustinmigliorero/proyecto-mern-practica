const express = require("express");
const rutas = express.Router();
const {
  verPublicaciones,
  verPublicacion,
  crearPublicacion,
  eliminarPublicacion,
  editarPublicacion,
} = require("../controladores/publicaciones");

rutas.get("/", verPublicaciones);
rutas.get("/:id", verPublicacion);

rutas.post("/", crearPublicacion);

rutas.put("/:id", editarPublicacion);

rutas.delete("/:id", eliminarPublicacion);

module.exports = rutas;
