import React from "react"
import Menu_colegios1 from "../componentes/menu_colegioslasalle"
import Barras_de_busqueda from "../componentes/barras_de_busqueda"

function Menu_colesalle(){
  return(
    <div className="Menu_colegiolasalle">
      <Barras_de_busqueda></Barras_de_busqueda>
      <Menu_colegios1/>
    </div>
  );
}

export default Menu_colesalle
