import React from "react"
import Menu_colegios from "../componentes/menu_colegios"
import Barras_de_busqueda from "../componentes/barras_de_busqueda"

function Menu_cole(){
  return(
    <div className="Menu_colegio">
      <Barras_de_busqueda></Barras_de_busqueda>
      <Menu_colegios/>
    </div>
  );
}

export default Menu_cole
