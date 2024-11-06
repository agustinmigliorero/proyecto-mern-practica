import { useState } from "react";

function CuadradoRojo() {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "red",
      }}
    ></div>
  );
}

function CuadradoVerde() {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "green",
      }}
    ></div>
  );
}

function App() {
  const [eleccion, setEleccion] = useState("verde");

  let contenido;
  if (eleccion === "verde") {
    contenido = <CuadradoVerde />;
  } else {
    contenido = <CuadradoRojo />;
  }

  function cambiarEleccion() {
    if (eleccion === "verde") {
      setEleccion("rojo");
    } else {
      setEleccion("verde");
    }
  }

  return (
    <>
      <h1>Hola!</h1>
      <button onClick={cambiarEleccion}>Cambiar color cuadrado</button>
      {contenido}
    </>
  );
}

export default App;
