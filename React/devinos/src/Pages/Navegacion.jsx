import React from "react";
import './Navegacion.css';
import { Link, } from "react-router-dom";
import PrivateComponent from "../components/PrivateComponent"


function Navegacion() {
    return (
        <nav>
            <h2 id="navT"> Módulos </h2>
            <div id="navElements">
                <PrivateComponent roleList={"ADMINISTRADOR"}>
                    <div id="navElements">
                        <Link to="/Index/Admin/Proyectos" className="Element">  ProyectosA </Link>
                    </div>
                    <div id="navElements">
                        <Link to="/Index/Usuarios" className="Element">  Usuarios </Link>
                    </div >

                </PrivateComponent>
                <PrivateComponent roleList={"LIDER"}>
                    <div id="navElements">
                        <Link to="/Index/Lider/Proyectos" className="Element">  ProyectosL </Link>
                    </div>
                    <div id="navElements">
                        <Link to="/Index/Estudiantes" className="Element">  Estudiantes </Link>
                    </div >
                </PrivateComponent>

                <PrivateComponent roleList={"ESTUDIANTE"}>
                    <div id="navElements">
                        <Link to="/Index/Estudiante/Proyectos" className="Element">  ProyectosE </Link>
                    </div>
                </PrivateComponent>

            </div>
        </nav>
    );
}
export default Navegacion;
