import React, { Fragment, useEffect, useState } from "react";
import Producto from "../producto/Producto";
import "./Productos.css";
import axios from "axios";
import { useSearch } from "../../context/SearchContext";
const Productos = () => {
  const { searchProduct } = useSearch();
  const [productos, setProductos] = useState();
  const [listaProductos, setListaProductos] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.mercadolibre.com/sites/MLA/search?q=:${searchProduct}`)
      .then((res) => {
        const data = res.data;
        setProductos(data.results);
      });
  }, [searchProduct]);

  useEffect(() => {
    if (productos) {
      setListaProductos(productos.slice(0, 4));
    }
  }, [productos]);

  return (
    <Fragment>
      {listaProductos ? (
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
