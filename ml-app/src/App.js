import React, { Fragment } from "react";
import Buscador from "./componentes/buscador/Buscador";
import Productos from "./componentes/productos/Productos";
function App() {
  return (
    <Fragment>
      <Buscador />
      <Productos />
    </Fragment>
  );
}

export default App;
