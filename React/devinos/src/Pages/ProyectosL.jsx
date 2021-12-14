import React from "react";
import './mainStyle.css'
import PrivateRoute from "../components/PrivateRoute";
function ProyectosL() {

    return (
        <PrivateRoute roleList={"LIDER"}>
            <div id="main-section">
                ProyectosL
            </div>
        </PrivateRoute>
    );
}
export default ProyectosL;