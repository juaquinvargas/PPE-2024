import React from 'react';
import Registro_colegio from '../componentes/registro_colegio';
import Barras_de_busqueda from '../componentes/barras_de_busqueda';

function Colegios(){
 return(
   <div className="Colegios">
     <Barras_de_busqueda></Barras_de_busqueda>
     <Registro_colegio/>
   </div>
 );
}
export default Colegios;