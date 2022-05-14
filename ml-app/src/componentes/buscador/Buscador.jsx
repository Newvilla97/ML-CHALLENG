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
          className="inputBuscador"
          placeholder="Nunca dejes de buscar"
        ></input>
        <button className="botonLupa">
          <img className="lupa-logo" src={lupa} alt="logo" />
        </button>
      </div>
    </Fragment>
  );
};

export default Buscador;
