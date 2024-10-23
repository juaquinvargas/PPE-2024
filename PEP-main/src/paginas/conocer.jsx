import React from "react";
import Conocer_mas from "../componentes/conocer_mas";
import Barras_de_busqueda from "../componentes/barras_de_busqueda";

function Conocer(){
  return(
    <div className="Conocer">
      <Barras_de_busqueda></Barras_de_busqueda>
      <Conocer_mas/>
    </div>
  )
}
export default Conocer;