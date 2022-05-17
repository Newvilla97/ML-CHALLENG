import React, { Fragment, useEffect, useState } from "react";
import Producto from "../producto/Producto";
import "./Productos.css";
import { useProductos } from "../../context/ProductosContext";

const Productos = () => {
  const [listaProductos, setListaProductos] = useState([]);
  const { productos } = useProductos();
  const [viewProducts, setViewProducts] = useState(false);

  useEffect(() => {
    if (productos) {
      setListaProductos(productos.slice(0, 4));
      setTimeout(function () {
        setViewProducts(true);
      }, 400);
    }
  }, [productos]);

  return (
    <Fragment>
      {listaProductos && viewProducts ? (
        <div className="principalContainerProductos">
          <div className="breadcrumb-item active navProductos">
            {
              "Electronica, Audio y Video > Ipod > Reproductores Ipod Tuch > 32GB"
            }
          </div>

          <div className="containerProductos">
            {listaProductos.map((p) => (
              <Producto data={p} />
            ))}
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};
export default Productos;
