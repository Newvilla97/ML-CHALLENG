import React, { useMemo, useState, useEffect } from "react";

const SearchContext = React.createContext();
export function SearchProvider(props) {
  const [searchProduct, setSearchProduct] = useState();

  const value = useMemo(() => {
    return {
      setSearchProduct,
      searchProduct,
    };
  }, [searchProduct]);
  return <SearchContext.Provider value={value} {...props} />;
}

export function useSearch() {
  const context = React.useContext(SearchContext);
  return context;
}
