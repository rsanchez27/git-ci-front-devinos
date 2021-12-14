import React from "react";
import './mainStyle.css'
import PrivateRoute from "../components/PrivateRoute";
function ProyectosE() {
    return (
        <PrivateRoute roleList={"ESTUDIANTE"}>
            <div id="main-section">
                ProyectosE
            </div>
        </PrivateRoute>
    );
}
export default ProyectosE;