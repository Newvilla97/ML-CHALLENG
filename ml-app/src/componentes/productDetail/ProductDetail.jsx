import React, { Fragment, useEffect, useState } from "react";
import "./ProductDetail.css";
import { useProductDetails } from "../../context/ProductDetailsContext";
import axios from "axios";

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState();
  const { idProduct } = useProductDetails();

  useEffect(() => {
    axios.get(`https://api.mercadolibre.com/items/${idProduct}`).then((res) => {
      const data = res.data;
      setProductDetail(data);
    });
  }, [idProduct]);
  return (
    <Fragment>
      {productDetail ? (
        <div className="principal-container-products">
          <div className="breadcrumb-item active nav-products">
            {
              "Electronica, Audio y Video > Ipod > Reproductores Ipod Tuch > 32GB"
            }
          </div>

          <div className="container-products">
            <div className="container-details">
              <img
                className="img-details-product"
                src={productDetail.thumbnail}
                alt="logo"
              />
              <div className="details-product">
                <div>
                  {productDetail.condition === "new" ? "Nuevo" : "Usado"} -{" "}
                  {productDetail.sold_quantity + " Vendidos"}
                </div>
                <div>{productDetail.title}</div>
                <div>
                  {Intl.NumberFormat("es-AR", {
                    style: "currency",
                    currency: productDetail.currency_id,
                  }).format(productDetail.price)}
                </div>
                <button className="button-buy">Comprar</button>
              </div>
            </div>
            <div className="details-description">
              <div className="title-description">Descripcion del Producto</div>
              <div className="description-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                quo, quia inventore labore suscipit voluptatibus tempora dolor
                omnis, debitis doloremque ullam quisquam eaque laboriosam? Esse
                ea eaque deleniti minima quo.
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};
export default ProductDetail;
