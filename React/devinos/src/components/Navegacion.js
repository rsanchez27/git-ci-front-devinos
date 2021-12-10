import React from "react";
import './Navegacion.css';
import Principal from "./Principal";
import {
    Link,
    Routes,
    Route
} from "react-router-dom";


function Navegacion() {
    return (
        <nav>
            <h2 id="navT"> Módulos </h2>
            <div id="navElements">
                <div id="navElements">
                    <Link to="/Proyectos" className="Element">  Proyectos </Link>
                </div>
                <div id="navElements">
                    <Link to="/Usuarios" className="Element">  Usuarios </Link>
                </div >
            </div>
            <Routes>
                <Route path="/Proyectos" element={<Principal component="1"/>} />
                <Route path="/Usuarios" element={<Principal component="2"/>} />
            </Routes>
        </nav>
    );
}
export default Navegacion;
