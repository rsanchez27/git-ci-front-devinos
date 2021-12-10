import React from "react";
import './Navegacion.css';

import {
    Link,
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
        </nav>
    );
}
export default Navegacion;
