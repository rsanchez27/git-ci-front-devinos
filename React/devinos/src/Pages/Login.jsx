import React from 'react'
import LogoDevinos2 from "../assets/LogoDevinos2.png";
import "./Login.css"
import {
    Link,
} from "react-router-dom";

export const Login = () => {

    return (
        <section>
            <div id="loginSec">
                <div>
                    <img src={LogoDevinos2} />
                </div>
                <div>
                    <input
                        type="text"
                        id="input"
                        className="inputUserLogin"
                        placeholder="Nombre de Usuario"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="input"
                        className="inputUserLogin"
                        placeholder="Nombre de Usuario"
                    />
                </div>

                <div>
                    <a href="/Index"><input type="button" value="Iniciar sesión" name="acceder" id="Boton-Style"></input> </a>
                </div>
                <div id="regcomment">¿no tienes una cuenta?</div>
                <div >
                    <Link to="/Registro" id="regLink">  Registrarse </Link>
                </div >
            </div>
        </section>
    )
}

export default Login
