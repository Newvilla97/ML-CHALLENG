import React, { useMemo, useState } from "react";
const ProductDetailsContext = React.createContext();
export function ProductDetailsProvider(props) {
  const [idProduct, setIdProduct] = useState();
  const [categoriesContext, setCategoriesContext] = useState();

  const value = useMemo(() => {
    return {
      setIdProduct,
      idProduct,
      setCategoriesContext,
      categoriesContext,
    };
  }, [idProduct]);
  return <ProductDetailsContext.Provider value={value} {...props} />;
}
export function useProductDetails() {
  const context = React.useContext(ProductDetailsContext);
  return context;
}
