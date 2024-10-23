import React from 'react'
import Barras_de_busqueda from '../componentes/barras_de_busqueda';
import Somos from '../componentes/somos';

  function Inicio_sesion(){
    return (
      <div className='Inicio'>
        <Barras_de_busqueda></Barras_de_busqueda>
        <Somos></Somos>
      </div>
    );
  }
export default Inicio_sesion