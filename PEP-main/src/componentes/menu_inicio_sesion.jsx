import React from "react";
import { Link } from "react-router-dom";

function Menu_inicio_sesion() {
  return (
    <div className="header">
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ margin: "20px" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/login">
            <i>P.P.E</i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/colegios">
                  Colegios Registrados
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Inicio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="¿Qué deseas buscar?"
            aria-label="Search"
          />
          <button
            type="submit"
            style={{ backgroundColor: "#DE1103", color: "#FFFFFF" }}
          >
            buscar
          </button>
        </form>
      </div>
      <div className="p-2"></div>
      <div className="card text-center mt-3">
        <div
          className="card-header"
          style={{ backgroundColor: "#DE1103", color: "#FFFFFF" }}
        >
        </div>
      </div>
      <div className="container"></div>
    </div>
  );
}
export default Menu_inicio_sesion