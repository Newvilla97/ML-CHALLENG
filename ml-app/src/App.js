import React from "react";
import Buscador from "./componentes/buscador/Buscador";
import Productos from "./componentes/productos/Productos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalleProducto from "./componentes/detalleProducto/DetalleProducto";
import { ProductosProvider } from "./context/ProductosContext";
import { ProductDetailsProvider } from "./context/ProductDetailsContext";
function App() {
  return (
    <ProductosProvider>
      <ProductDetailsProvider>
        <Buscador />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Productos />}></Route>
            <Route
              path="/detalle-producto"
              element={<DetalleProducto />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </ProductDetailsProvider>
    </ProductosProvider>
  );
}

export default App;
