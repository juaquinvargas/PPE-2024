import React from "react";
import { Link } from "react-router-dom";

function Registro_colegio() {
  return (
    <div className="list-group">
      <button type="button" className="list-group-item list-group-item-action">
        <Link className="nav-link active" to="/menu_colegiolasalle">
          la salle
        </Link>
      </button>
      <button type="button" className="list-group-item list-group-item-action">
        <Link className="nav-link active" to="/menu_colegio">
          la presentacion
        </Link>
      </button>
      <button type="button" className="list-group-item list-group-item-action">
        <Link className="nav-link active" to="/menu_colegio">
          el inem
        </Link>
      </button>
      <button type="button" className="list-group-item list-group-item-action">
        <Link className="nav-link active" to="/menu_colegio">
          el octavio
        </Link>
      </button>
      <button type="button" className="list-group-item list-group-item-action">
        <Link className="nav-link active" to="/menu_colegio">
          el santo angel
        </Link>
      </button>
    </div>
  );
}
export default Registro_colegio;
