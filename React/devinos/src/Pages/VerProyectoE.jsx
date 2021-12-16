import React from "react";
import './mainStyle.css'
import PrivateRoute from "../components/PrivateRoute";
function VerProyectoE() {
    return (
        <PrivateRoute roleList={"ESTUDIANTE"}>
            <div id="main-section">
                Proyect info
            </div>
        </PrivateRoute>
    );
}
export default VerProyectoE;