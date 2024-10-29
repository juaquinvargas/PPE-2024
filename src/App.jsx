import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/inicio";
// import App from "./paginas/login"
import Log from "./paginas/login";
import Inicio_sesion from "./paginas/inicio_sesion";
import Registro from "./paginas/registro";
import Colegios from "./paginas/colegios";
import Menu_cole from "./paginas/menu_colegio";
import Menu_colesalle from "./paginas/menu_colegiolasalle";
import Menu_coleinem from "./paginas/menu_colegioinem";
import Perfil from "./paginas/perfil";
import Quienes_somos from "./paginas/quienes_somos";
import Conocer from "./paginas/conocer";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/login" element={<Log />} />"
        <Route exact path="/inicio_sesion" element={<Inicio_sesion />} />
        <Route exact path="/registro" element={<Registro />} />
        <Route exact path="/colegios" element={<Colegios />} />
        <Route exact path="/menu_colegio" element={<Menu_cole />} />
        <Route exact path="/menu_colegiolasalle" element={<Menu_colesalle />} />
        <Route exact path="/menu_colegioinem" element={<Menu_coleinem/>} />
        <Route exact path="/perfil" element={<Perfil />} />
        <Route exact path="/quienes_somos" element={<Quienes_somos />} />"
        <Route exact path="/conocer" element={<Conocer />} />
      </Routes>
    </Router>
  );
}
