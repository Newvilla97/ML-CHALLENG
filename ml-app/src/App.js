import React from "react";
import Buscador from "./componentes/search/Search";
import Products from "./componentes/products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./componentes/productDetail/ProductDetail";
import { SearchProvider } from "./context/SearchContext";
import { ProductDetailsProvider } from "./context/ProductDetailsContext";
function App() {
  return (
    <SearchProvider>
      <ProductDetailsProvider>
        <BrowserRouter>
          <Buscador />
          <Routes>
            <Route path="/" element={<Products />}></Route>
            <Route path="/detalle-producto" element={<ProductDetail />}></Route>
          </Routes>
        </BrowserRouter>
      </ProductDetailsProvider>
    </SearchProvider>
  );
}

export default App;
