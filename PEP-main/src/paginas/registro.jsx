import React from 'react'
import Menu_login from '../componentes/menu_login'
import Registro_usuario from '../componentes/registro_usuario'
import FormularioRegistro from '../componentes/FormularioRegistro';

function Registro(){
  return(
    <div className='Registro'>
      <Menu_login/>
      <FormularioRegistro/>
    </div>
  );
}  

export default Registro