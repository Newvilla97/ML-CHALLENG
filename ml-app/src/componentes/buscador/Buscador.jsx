import React, { Fragment } from "react";
import "./Buscador.css";
import logoMl from "../../imagenes/logoMl.png";
import lupa from "../../imagenes/lupa.png";

const Buscador = () => {
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
        ></input>
        <button className="btn btn-outline-secondary botonLupa" type="button">
          <img className="lupa-logo" src={lupa} alt="logo" />
        </button>
      </div>
    </Fragment>
  );
};

export default Buscador;
