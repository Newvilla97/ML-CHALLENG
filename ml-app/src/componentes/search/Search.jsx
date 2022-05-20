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
  const onSubmit = (event) => {
    event.preventDefault();
    history(`/`);
    setSearchProduct(searchProduct);
  };
  return (
    <Fragment>
      <div className="containerSearch">
        <button className="button-logo" onClick={() => history(`/`)}>
          <img className="img-logo" src={logoMl} alt="logo" />
        </button>

        <form onSubmit={onSubmit}>
          <div className="form">
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
              type="submit"
              disabled={!searchProduct || searchProduct.trim() === ""}
            >
              <img className="lupa-logo" src={lupa} alt="logo" />
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Search;
