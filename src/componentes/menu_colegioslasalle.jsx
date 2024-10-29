import React from "react";
import logo from "../imagenes/ppe.png";
import cursos from "../imagenes/torta de banano.jpg";
import cursoss from "../imagenes/huevo.jpg";
import cursoso from "../imagenes/papas.jpg";
import cursosa from "../imagenes/papacriolla.jpg";
import cursose from "../imagenes/salchipapa.jpg";
import cursosu from "../imagenes/perro.jpg";
import cursoseo from "../imagenes/limonada.jpg";

import { LuSchool } from "react-icons/lu";

function Menu_colegios1() {
  return (
    <div className="container">
      <h1 className="text-center my-4">MENÚ DE LA CAFETERÍA</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img src={cursoss} className="card-img-top" alt="Course 1" />
            <div className="card-body">
              <p><small><LuSchool/> Escuela La Salle</small></p>
              <h5 className="card-title">HUEVOS</h5>
              <p className="card-text">
                <small>$3000</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={cursoso} className="card-img-top" alt="Course 2" />
            <div className="card-body">
              <p><small><LuSchool/> Escuela La Salle</small></p>
              <h5 className="card-title">PAPAS</h5>
              <p className="card-text">
                $3000
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={cursos} className="card-img-top" alt="Course 3" />
            <div className="card-body">
              <p><small><LuSchool/> Escuela La Salle</small></p>
              <h5 className="card-title">TORTA DE BANANO</h5>
              <p className="card-text">
                $3000
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={cursosa} className="card-img-top" alt="Course 3" />
            <div className="card-body">
              <p><small><LuSchool/> Escuela La Salle</small></p>
              <h5 className="card-title">PAPAS CRIOLLAS</h5>
              <p className="card-text">
                $3000
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={cursose} className="card-img-top" alt="Course 3" />
            <div className="card-body">
              <p><small><LuSchool/> Escuela La Salle</small></p>
              <h5 className="card-title">SALCHIPAPAS</h5>
              <p className="card-text">
                $3000
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={cursosu} className="card-img-top" alt="Course 3" ></img>
            <div className="card-body">
              <p><small><LuSchool/> Escuela La Salle</small></p>
              <h5 className="card-title">PERROS</h5>
              <p className="card-text">
                $3000
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={cursoseo} className="card-img-top" alt="Course 3" ></img>
            <div className="card-body">
              <p><small><LuSchool/> Escuela La Salle</small></p>
              <h5 className="card-title">LIMONADAS</h5>
              <p className="card-text">
                $2000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}
export default Menu_colegios1;