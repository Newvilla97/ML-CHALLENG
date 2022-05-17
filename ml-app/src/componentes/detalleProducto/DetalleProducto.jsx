import React, { Fragment, useEffect, useState } from "react";
import "./DetalleProducto.css";
import { useProductDetails } from "../../context/ProductDetailsContext";
import Spinner from "react-bootstrap/Spinner";
const DetalleProducto = () => {
  const { productDetail } = useProductDetails();
  const [viewDetail, setViewDetail] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setViewDetail(!viewDetail);
    }, 400);
  }, [productDetail]);
  return (
    <Fragment>
      {productDetail && !viewDetail ? (
        <div className="principalContainerProductos">
          <div className="breadcrumb-item active navProductos">
            {
              "Electronica, Audio y Video > Ipod > Reproductores Ipod Tuch > 32GB"
            }
          </div>

          <div className="containerProductos">
            <div className="containerDetalles">
              <img
                className="imagenDetalleProducto"
                src={productDetail.thumbnail}
                alt="logo"
              />
              <div className="detallesProducto">
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
                <button className="botonComprar">Comprar</button>
              </div>
            </div>
            <div className="detalleDescripcion">
              <div className="tituloDescripcion">Descripcion del Producto</div>
              <div className="DescripcionTexto">
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
export default DetalleProducto;
