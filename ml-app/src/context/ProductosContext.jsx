import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
const ProductosContext = React.createContext();
export function ProductosProvider(props) {
  const [productos, setProductos] = useState();

  useEffect(() => {
    axios
      .get(`https://api.mercadolibre.com/sites/MLA/search?q=:Teclados`)
      .then((res) => {
        const data = res.data;
        setProductos(data.results);
      });
  }, []);

  const value = useMemo(() => {
    return {
      productos,
    };
  }, [productos]);
  return <ProductosContext.Provider value={value} {...props} />;
}

export function useProductos() {
  const context = React.useContext(ProductosContext);
  return context;
}
