import React, { Fragment, useState } from "react";
import "./Buscador.css";
import logoMl from "../../imagenes/logoMl.png";
import lupa from "../../imagenes/lupa.png";
import { useProductos } from "../../context/ProductosContext";
const Buscador = () => {
  const { setSearchProduct } = useProductos();
  const [searchProduct, setSerachProduct] = useState();

  return (
    <Fragment>
      <div className="containerBuscador">
        <img className="imagen-logo" src={logoMl} alt="logo" />
        <input
          type="text"
          className="form-control inputBuscador"
          placeholder="Buscar...."
          aria-label="Buscar...."
          aria-describedby="basic-addon2"
          onChange={(e) => setSerachProduct(e.target.value)}
        ></input>
        <button
          className="btn btn-outline-secondary botonLupa"
          type="button"
          onClick={() => setSearchProduct(searchProduct)}
        >
          <img className="lupa-logo" src={lupa} alt="logo" />
        </button>
      </div>
    </Fragment>
  );
};

export default Buscador;
