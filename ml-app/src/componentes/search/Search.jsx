import React, { Fragment, useState } from "react";
import "./Search.css";
import logoMl from "../../img/logoMl.png";
import lupa from "../../img/lupa.png";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";

const Search = () => {
  const { setSearchProduct } = useSearch();
  const [searchProduct, setSerachProduct] = useState();
  const history = useNavigate();
  return (
    <Fragment>
      <div className="containerSearch">
        <img className="img-logo" src={logoMl} alt="logo" />
        <input
          type="text"
          className="form-control inputBuscador"
          placeholder="Buscar...."
          aria-label="Buscar...."
          aria-describedby="basic-addon2"
          onChange={(e) => setSerachProduct(e.target.value)}
        ></input>
        <button
          className="btn btn-outline-secondary btnLupa"
          type="button"
          onClick={() => {
            setSearchProduct(searchProduct);
            history(`/`);
          }}
        >
          <img className="lupa-logo" src={lupa} alt="logo" />
        </button>
      </div>
    </Fragment>
  );
};

export default Search;
