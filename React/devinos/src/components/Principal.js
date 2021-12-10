import React from 'react'
import Usuarios from './Usuarios'
import Proyectos from './Proyectos'
import './Principal.css'
function Principal(props) {
    switch (props.component) {
        case "1":
            return (
                <div id="SP">
                    <Proyectos/>
                </div>
            );
        case "2":
            return (
                <div id="SP">
                    <Usuarios/>
                </div>
            );
        default:
            return (<></>);
    }
}
export default Principal;
