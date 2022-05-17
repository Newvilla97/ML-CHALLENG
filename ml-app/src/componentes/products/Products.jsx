import React, { Fragment, useEffect, useState } from "react";
import Product from "../product/Product";
import "./Products.css";
import axios from "axios";
import { useSearch } from "../../context/SearchContext";
const Products = () => {
  const { searchProduct } = useSearch();
  const [products, setProducts] = useState();
  const [listProducts, setListProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.mercadolibre.com/sites/MLA/search?q=:${searchProduct}`)
      .then((res) => {
        const data = res.data;
        setProducts(data.results);
      });
  }, [searchProduct]);

  useEffect(() => {
    if (products) {
      setListProducts(products.slice(0, 4));
    }
  }, [products]);

  return (
    <Fragment>
      {listProducts ? (
        <div className="principal-container-products">
          <div className="breadcrumb-item active nav-products">
            {
              "Electronica, Audio y Video > Ipod > Reproductores Ipod Tuch > 32GB"
            }
          </div>

          <div className="container-products">
            {listProducts.map((p) => (
              <Product data={p} />
            ))}
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};
export default Products;
