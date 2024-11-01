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

async function eliminarPublicacion(req, res) {
  const { id } = req.params;
  const publicacion = await Publicacion.findByIdAndDelete(id);
  res.json({ publicacion, mensaje: "Publicacion Eliminada" });
}

async function editarPublicacion(req, res) {
  const { id } = req.params;
  const { contenido, subtitulo, titulo } = req.body;
  const publicacion = await Publicacion.findByIdAndUpdate(id, {
    contenido,
    subtitulo,
    titulo,
  });
  res.json(publicacion);
}

module.exports = {
  crearPublicacion,
  verPublicaciones,
  verPublicacion,
  eliminarPublicacion,
  editarPublicacion,
};

/*
http://192.168.2.102:3000/publicaciones
*/
