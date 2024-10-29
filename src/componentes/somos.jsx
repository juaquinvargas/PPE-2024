import React from "react";
import { Link } from "react-router-dom";

function Somos() {
  return (
 <div className="header">
          <Link className="navbar-brand" to="/login">
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          </div>
      <div className="card text-center mt-3">
        <div
          className="card-header"
          style={{ backgroundColor: "#DE1103", color: "#FFFFFF" }}
        >
          <strong>¿te interesa saber qué hacemos?</strong>

          <div className="pd-3" style={{ backgroundColor: "#" }}></div>
          <div className="card-body" style={{ backgroundColor: "#DE1103" }}>
            <div
              className="card-body"
              style={{ backgroundColor: "#dddd1e", color: "black" }}
            >
              <p className="card-text">
                <h4><strong>¿Quiénes somos?</strong></h4>
                En P.P.E, nos apasiona transformar la experiencia de la comida escolar en algo conveniente, accesible y satisfactorio para todos. Nuestro objetivo es crear un puente entre los colegios y los estudiantes, facilitando una gestión eficiente de menús y pedidos que se adapte a las necesidades diarias de cada comunidad educativa.

                <h4><strong>¿Qué hacemos?</strong></h4>

                <strong>Para los colegios: </strong>Ofrecemos una plataforma intuitiva y fácil de usar donde los colegios pueden registrar y actualizar sus menús, precios y horarios. Nuestra herramienta permite a los colegios gestionar sus ofertas alimenticias de manera eficiente, asegurando que cada estudiante tenga acceso a opciones frescas y saludables.

                <p><strong>Para los estudiantes: </strong>Brindamos una experiencia sencilla para que los estudiantes exploren los menús disponibles, revisen los precios y realicen pedidos con facilidad. Ya sea que deseen hacer un pedido para una hora específica o simplemente ver las opciones disponibles, nuestra plataforma está diseñada para hacer que el proceso sea rápido y sin complicaciones.</p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container"></div>
    </div>
  );
}

export default Somos;
