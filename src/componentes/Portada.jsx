import React from "react";
import ppe from "../imagenes/ppe.png";
import { Link } from "react-router-dom";

function Portada() {
  return (
    <div className="container">
      <div className="row">
        <img
          src={ppe}
          className="rounded mx-auto d-block"
          alt="logo"
          style={{ maxWidth: "400px", background: "#dddd1e" }}
        />
        <div className="card mx-auto" style={{ background: "#6fca02" }}>
          <div className="card-body">
            <p className="text-center">
              "Bienvenido al PPE, aquí podrás ver la diversidad de productos que
              ofrece tu institución, precios y más."
            </p>
            <hr />
            <Link to="/registro">
              <div className="d-grid gap-2 col-6 mx-auto pb-1">
                <button className="btn btn-outline-danger" type="button">
                  Registrate
                </button>
              </div>
            </Link>
            <Link to="/login">
              <div className="d-grid gap-2 col-6 mx-auto pb-3">
                <button className="btn btn-outline-danger" type="button">
                  Iniciar sesion
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portada;
