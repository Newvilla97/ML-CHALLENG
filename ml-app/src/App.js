import React, { Fragment } from "react";
import Buscador from "./componentes/buscador/Buscador";
import Productos from "./componentes/productos/Productos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalleProducto from "./componentes/detalleProducto/DetalleProducto";
function App() {
  return (
    <Fragment>
      <Buscador />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Productos />}></Route>
          <Route path="/detalle-producto" element={<DetalleProducto />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
