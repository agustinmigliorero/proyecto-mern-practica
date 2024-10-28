const Publicacion = require("../modelos/publicacion");

async function crearPublicacion(req, res) {
  const { titulo, subtitulo, contenido } = req.body;
  const nuevaPublicacion = new Publicacion({ titulo, subtitulo, contenido });
  await nuevaPublicacion.save();
  res.send(nuevaPublicacion);
}

async function verPublicaciones(req, res) {
  const publicaciones = await Publicacion.find();
  res.json(publicaciones);
}

async function verPublicacion(req, res) {
  const { id } = req.params;
  const publicacion = await Publicacion.findById(id);
  res.json(publicacion);
}

module.exports = {
  crearPublicacion,
  verPublicaciones,
  verPublicacion,
};

/*
http://192.168.2.102:3000/publicaciones
*/
