import React, { Fragment } from "react";
import ipad1 from "../../imagenes/ipad1.jpg";
import { useParams } from "react-router-dom";
import "./DetalleProducto.css";
const DetalleProducto = () => {
  let { id_product } = useParams();
  return (
    <Fragment>
      <div className="principalContainerProductos">
        <div className="breadcrumb-item active navProductos">
          {"Electronica, Audio y Video > Ipod > Reproductores Ipod Tuch > 32GB"}
        </div>

        <div className="containerProductos">
          <div className="containerDetalles">
            <img className="imagenDetalleProducto" src={ipad1} alt="logo" />
            <div className="detallesProducto">
              <div>Nuevo - 234 vendidos</div>
              <div>Deco Reverse Sombreado Oxford</div>
              <div>$1.980</div>
              <button className="botonComprar">Comprar</button>
            </div>
          </div>
          <div className="detalleDescripcion">
            <div className="tituloDescripcion">Descripcion del Producto</div>
            <div className="DescripcionTexto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quo, quia inventore labore suscipit voluptatibus tempora dolor
              omnis, debitis doloremque ullam quisquam eaque laboriosam? Esse ea
              eaque deleniti minima quo.
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default DetalleProducto;
