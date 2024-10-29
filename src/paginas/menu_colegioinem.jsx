import React from "react"
import Menu_colegios2 from "../componentes/menu_colegiosinem"
import Barras_de_busqueda from "../componentes/barras_de_busqueda"

function Menu_coleinem(){
  return(
    <div className="Menu_colegioinem">
      <Barras_de_busqueda></Barras_de_busqueda>
      <Menu_colegios2/>
    </div>
  );
}

export default Menu_coleinem
