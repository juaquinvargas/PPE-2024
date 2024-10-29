import React from "react";
import Menu from '../componentes/menu';
import Portada from '../componentes/Portada';

function Inicio() {
  return (
    <div className="Inicio" style={{ backgroundColor: "#dddd1e" }}>
      <Menu />
      <Portada />
    </div>
  );
}

export default Inicio;