import React from "react";
import Buscador from "./componentes/buscador/Buscador";
import Productos from "./componentes/productos/Productos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalleProducto from "./componentes/detalleProducto/DetalleProducto";
import { ProductosProvider } from "./context/ProductosContext";
function App() {
  return (
    <ProductosProvider>
      <Buscador />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Productos />}></Route>
          <Route
            path="/detalle-producto/:id_product"
            element={<DetalleProducto />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </ProductosProvider>
  );
}

export default App;
