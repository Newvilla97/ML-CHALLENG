import React, { Fragment } from "react";
import Producto from "../producto/Producto";
import "./Productos.css";
const Productos = () => {
  return (
    <Fragment>
      <div className="principalContainerProductos">
        <div
          className="breadcrumb-item active navProductos"
          aria-current="page"
        >
          {"Electronica, Audio y Video > Ipod > Reproductores Ipod Tuch > 32GB"}
        </div>

        <div className="containerProductos">
          <Producto />
          <Producto />
          <Producto />
          <Producto />
        </div>
      </div>
    </Fragment>
  );
};
export default Productos;
