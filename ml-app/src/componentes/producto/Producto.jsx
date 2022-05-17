import React, { Fragment } from "react";
import "./Producto.css";
import { useNavigate } from "react-router-dom";
import shippingLogo from "../../imagenes/ic_shipping.png";
import { useProductDetails } from "../../context/ProductDetailsContext";
const Producto = ({ data }) => {
  const { setIdProduct } = useProductDetails();
  const history = useNavigate();
  return (
    <Fragment>
      <div className="containerProducto">
        <button
          onClick={() => {
            history(`/detalle-producto`);
            setIdProduct(data.id);
          }}
          className="botonProducto"
        >
          <img className="imagenProducto" src={data.thumbnail} alt="logo" />
        </button>
        <div className="descripcionProducto">
          <div>
            {Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: data.prices.presentation.display_currency,
            }).format(data.price)}
            {data.shipping.free_shipping ? (
              <img className="shipping-logo" src={shippingLogo} alt="logo" />
            ) : null}
          </div>
          <div>{data.title}</div>
        </div>
        <div className="breadcrumb-item active ubicacionProducto">
          capital federal
        </div>
      </div>
    </Fragment>
  );
};
export default Producto;
