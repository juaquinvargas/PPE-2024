import React from "react";
import "../estilos/index.css";
import Pie_de_pagina from "../componentes/pie_de_pagina";
import {Link} from "react-router-dom";

function Init() {
  return (
    <div className="app">
      <header className="header">
        <div className="login-section">
          <h2>Iniciar Sesión</h2>
          <form>
            <div>
              <label>Usuario:</label>
              <input type="text" name="username@tucorreo.com"></input>
            </div>
            <div>
              <label>Contraseña:</label>
              <input type="password" name="password"></input>
            </div>
            <Link to="/inicio_sesion">
              <button type="submit">Iniciar Sesión</button>
            </Link>
          </form>
        </div>
        <div className="info-section">
          <h2>INFORMACIÓN DE LA PAGINA</h2>
          <p> aqui va mas info de la pagina </p>
        </div>
      </header>
      <Pie_de_pagina/>
    </div>
  );
}
export default Init;
