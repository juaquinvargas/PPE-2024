import React from "react";
import ppe from "../imagenes/ppe.png";
import { Link } from "react-router-dom";

function Conocer_mas() {
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
                <h4><strong>¿Para quien va dirigido?</strong></h4>
                P.P.E va dirigido a toda la comunidad educativa,Su propósito es facilitar el acceso a información actualizada sobre los productis a la venta, así como permitir la realización de pedidos de manera rápida y eficiente. Con esta herramienta, se busca optimizar la gestión de compras y asegurar que todos los miembros de la comunidad educativa tengan un recurso confiable para satisfacer sus necesidades académicas y administrativas.

                <h4><strong>¿Quienes somos?</strong></h4>

               soomos un grupo de estudiantes de la institución educativa la salle de campo amor y con este proyecto buscamos solventar el problema de las grandes filas y extensos tiempos de espera que se presenta en nuestra institución y en la gran mayoria de los colegios, todo para que los estudiantes puedan hacer un uso mas efectivo de su tiempo y haya una mejor gestión de sus compras.
                 <p className="card-text">
                                <h4><strong>¿Cual es nuestro objetivo?</strong></h4>
                                En P.P.E, nos apasiona transformar la experiencia de la comida escolar en algo conveniente, accesible y satisfactorio para todos. Nuestro objetivo es crear un puente entre los colegios y los estudiantes, facilitando una gestión eficiente de menús y pedidos que se adapte a las necesidades diarias de cada comunidad educativa.
                 </p>  

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
              
   

export default Conocer_mas;
