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
                    <a href="/Index"><input type="button" value="Log in" name="acceder" id="signIn"></input> </a>
                </div>
                <div id="navElements">
                    <Link to="/Registro" className="Element">  Registro </Link>
                </div >
            </div>
        </section>
    )
}

export default Login
