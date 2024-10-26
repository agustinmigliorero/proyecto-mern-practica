const mongoose = require("mongoose");

const publicacionSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  subtitulo: { type: String, required: true },
  contenido: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Publicacion", publicacionSchema);
