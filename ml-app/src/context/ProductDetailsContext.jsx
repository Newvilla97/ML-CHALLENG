import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
const ProductDetailsContext = React.createContext();
export function ProductDetailsProvider(props) {
  const [idProduct, setIdProduct] = useState();

  const value = useMemo(() => {
    return {
      setIdProduct,
      idProduct,
    };
  }, [idProduct]);
  return <ProductDetailsContext.Provider value={value} {...props} />;
}
export function useProductDetails() {
  const context = React.useContext(ProductDetailsContext);
  return context;
}
