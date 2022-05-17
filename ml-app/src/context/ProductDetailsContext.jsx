import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
const ProductDetailsContext = React.createContext();
export function ProductDetailsProvider(props) {
  const [productDetail, setProductDetail] = useState();
  const [idProduct, setIdProduct] = useState();
  useEffect(() => {
    axios.get(`https://api.mercadolibre.com/items/${idProduct}`).then((res) => {
      const data = res.data;
      setProductDetail(data);
    });
  }, [idProduct]);
  const value = useMemo(() => {
    return {
      productDetail,
      setIdProduct,
    };
  }, [productDetail]);
  return <ProductDetailsContext.Provider value={value} {...props} />;
}
export function useProductDetails() {
  const context = React.useContext(ProductDetailsContext);
  return context;
}
