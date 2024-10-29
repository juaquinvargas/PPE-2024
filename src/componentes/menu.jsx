import React from "react";
import { Link } from "react-router-dom";

function Menu() {
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
                <Link className="nav-link active" to="/registro">
                  registrate
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/colegios">
                  colegios registrados
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/login">
                  Inicio de sesión
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
          <strong>BIENVENIDO</strong>

          <div className="pd-3" style={{ backgroundColor: "#" }}></div>
          <div className="card-body" style={{ backgroundColor: "#DE1103" }}>
            <div
              className="card-body"
              style={{ backgroundColor: "#dddd1e", color: "black" }}
            >
              <p className="card-text">
                Esta página web sirve para ver todos los <strong>menús</strong>{" "}
                y <strong>productos</strong> escolares de las tiendas de
                Medellín.A través de esta plataforma, los padres, estudiantes y
                educadores pueden explorar una amplia gama de artículos , desde
                útiles escolares hasta alimentos y bebidas. Además, el sitio
                proporciona información actualizada sobre los precios, las
                promociones y la disponibilidad de cada producto en las
                distintas tiendas de las escuelas de la ciudad. Con una interfaz
                amigable y fácil de navegar, facilita a la hora de encontrar
                algo que se adapte a los gustos y necesidades de los estudiantes
                y padres.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container"></div>
    </div>
  );
}

export default Menu;
