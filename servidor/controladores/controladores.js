function controladorInicio(req, res) {
  res.send("<h1>Hola mundo!</h1>");
}

function controladorSaludar(req, res) {
  res.send(
    "<h1 style='text-align:center; font-family:sans-serif'>Bienvenido a la pagina!</h1>"
  );
}

function controladorSaludarNombre(req, res) {
  const nombrePersona = req.params.nombre;
  res.send("<h1>Hola! " + nombrePersona + " bienvenido!</h1>");
}

module.exports = {
  controladorSaludar,
  controladorInicio,
  controladorSaludarNombre,
};


