const express = require("express");
const rutas = express.Router();
const {
  controladorSaludar,
  controladorInicio,
  controladorSaludarNombre,
} = require("../controladores/controladores.js");

rutas.get("/", controladorInicio);

rutas.get("/saludar", controladorSaludar);

rutas.get("/saludar/:nombre", controladorSaludarNombre);

module.exports = rutas;
