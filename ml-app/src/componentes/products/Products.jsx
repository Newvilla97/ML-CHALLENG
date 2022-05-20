import React, { Fragment, useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Product from "../product/Product";
import "./Products.css";
import axios from "axios";
import { useSearch } from "../../context/SearchContext";
import Error from "../error/Error";
import { useProductDetails } from "../../context/ProductDetailsContext";
const Products = () => {
  const { searchProduct } = useSearch();
  const { setCategoriesContext } = useProductDetails();
  const [products, setProducts] = useState();
  const [listProducts, setListProducts] = useState([]);
  const [categories, setCategories] = useState();

  useEffect(() => {
    if (searchProduct && searchProduct.trim() !== "") {
      sessionStorage.setItem("searchProduct", searchProduct);
    }
    let searchProductStorage = sessionStorage.getItem("searchProduct");
    axios
      .get(`http://localhost:3001/api/${searchProductStorage}`)
      .then((res) => {
        const data = res.data;
        setProducts([]);
        setListProducts([]);
        setProducts(data.items);
        setCategories(data.categories);
        setCategoriesContext(data.categories);
      });
  }, [searchProduct]);

  useEffect(() => {
    if (products) {
      setListProducts([]);
      setListProducts(products.slice(0, 4));
    }
  }, [products]);

  return (
    <Fragment>
      {listProducts.length > 0 ? (
        <div className="principal-container-products">
          <div className="breadcrumb-item active nav-products">
            {categories.length > 0 &&
              categories[0].values[0].path_from_root.map((c) => (
                <div className="categories">
                  {c.name}
                  <div style={{ margin: "0 5px 0 5px" }}>{">"}</div>
                </div>
              ))}
          </div>

          <div className="container-products">
            {listProducts.map((p) => (
              <Product data={p} />
            ))}
          </div>
        </div>
      ) : (searchProduct && searchProduct.trim() === "") ||
        searchProduct === "" ||
        (products && products.length === 0) ? (
        <div className="dont-search">
          <Error />
        </div>
      ) : (
        <div className="spinner">
          <Spinner animation="border" />
        </div>
      )}
    </Fragment>
  );
};
export default Products;
