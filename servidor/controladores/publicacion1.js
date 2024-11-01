const Publicacion = require("../modelos/publicacion1");

const mostrarPublicaciones = async (req, res) => {
  const publicaciones = await Publicacion.find();
  res.json(publicaciones);
};

const crearPublicacion = async (peticion, respuesta) => {
  const { titulo, texto } = peticion.body;
  const publicacion = new Publicacion({
    titulo,
    texto,
  });

  await publicacion.save();

  respuesta.json({ mensaje: "Publicacion creada!", publicacion });
};

module.exports = { crearPublicacion, mostrarPublicaciones };
