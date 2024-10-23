import React from "react";
import logo from "../imagenes/ppe.png";
import cursos from "../imagenes/pastelpol.jpg";
import cursoss from "../imagenes/palito.jpg";
import cursoso from "../imagenes/fritos.jpg";
import cursosa from "../imagenes/churros.jpg";
import cursose from "../imagenes/salchipapa.jpg";
import cursosu from "../imagenes/perro.jpg";
import cursoseo from "../imagenes/gaseosas.jpg";
import helados from "../imagenes/gelats.jpg";
import agua from "../imagenes/agüita.jpg";
import solteritas from "../imagenes/solteritas.jpg";
import obleas from "../imagenes/obleas.jpg";

import { LuSchool } from "react-icons/lu";

function Menu_colegios() {
  return (
    <div className="container">
      <h1 className="text-center my-4">MENÚ DE LA CAFETERÍA</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img src={cursoss} className="card-img-top" alt="Course 1" />
            <div className="card-body">
              <p><small><LuSchool/> Escuela La Salle</small></p>
              <h4 className="card-title">PALITO DE QUESO</h4>
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
              <h5 className="card-title">EMPANADAS (ARROZ O PAPA) Y PAPAS RELLENAS</h5>
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
              <h5 className="card-title">PASTEL DE POLLO</h5>
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
              <h5 className="card-title">CHURROS</h5>
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
              <h5 className="card-title">GASEOSAS</h5>
              <p className="card-text">
                $2000
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center my-4">MENÚ DE LA FRUTERÍA</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img src={helados} className="card-img-top" alt="Course 1" />
            <div className="card-body">
              <p><small><LuSchool/> Escuela La Salle</small></p>
              <h4 className="card-title">HELADOS</h4>
              <p className="card-text">
                <small>$3000</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={agua} className="card-img-top" alt="Course 1" />
            <div className="card-body">
              <p><small><LuSchool/> Escuela La Salle</small></p>
              <h4 className="card-title">AGUA</h4>
              <p className="card-text">
                <small>$1000</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={solteritas} className="card-img-top" alt="Course 1" />
            <div className="card-body">
              <p><small><LuSchool/> Escuela La Salle</small></p>
              <h4 className="card-title">SOLTERIRAS</h4>
              <p className="card-text">
                <small>$2000</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={obleas} className="card-img-top" alt="Course 1" />
            <div className="card-body">
              <p><small><LuSchool/> Escuela La Salle</small></p>
              <h4 className="card-title">OBLEAS</h4>
              <p className="card-text">
                <small>$2500</small>
              </p>
            </div>
          </div>
        </div>
      </div> 
    </div>
    
  );
   
}

export default Menu_colegios;