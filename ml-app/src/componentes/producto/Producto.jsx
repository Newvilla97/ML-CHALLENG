import React, { Fragment } from "react";
import ipad1 from "../../imagenes/ipad1.jpg";
import "./Producto.css";
const Producto = () => {
  return (
    <Fragment>
      <div className="containerProducto">
        <img className="imagenProducto" src={ipad1} alt="logo" />
        <div className="descripcionProducto">
          <div>$ 1.980</div>
          <div>
            Apple Ipod Touch 5g 16gb negro igual a nuevo completo unico!
          </div>
        </div>
        <div className="breadcrumb-item active ubicacionProducto">
          capital federal
        </div>
      </div>
    </Fragment>
  );
};
export default Producto;
