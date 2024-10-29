import React from "react";
import { Link } from "react-router-dom";
import ppe from "../imagenes/ppe.png";

function Pie_de_pagina() {
  return (
    <div className="footer">
      <div className="container fluid">
        <div className="row mx-auto">
          <div className="text-center mx-auto">
            <h2 className="encabezado">Estudia en la salle</h2>
            <img src={ppe} alt="imagen" width={300} />
            <h4 className="encabezado">cosas relacionadas al contenido</h4>
            <p className="px-3">
              <small>texto pequeño creado en el pie de pagina</small>
            </p>
            <section className="text-center">
             <Link to="/conocer" className="btn btn-primary">conocer mas</Link>	
            </section>
          </div>
          <div className="text-center mx-auto">
           <h2 className="encabezado mt-3 pt3">
            <span className="text-primary">la salle siempre contigo</span>
           </h2>
            <p className="px=3">
              <small>
                <strong>
                 dejate complacer con nustro gran servicio, mira, opina y analiza todo lo que quieras pedir a traves de nuestra pagina web :3
                </strong>
              </small>
            </p>
            <section className="text-center pb-4">
              <Link to="/conocer" className="btn btn-primary">
              conocer mas
              </Link>	
            </section>
            <div id="copyright">
              <hr/>
              <p>
                <small>
                  la salle 2023, todos los derechos reservados
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pie_de_pagina;
