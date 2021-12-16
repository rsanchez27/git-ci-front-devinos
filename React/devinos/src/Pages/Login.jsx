import React, {useEffect} from 'react'
import LogoDevinos2 from "../assets/LogoDevinos2.png";
import useFormData from '../hooks/useFormData';
import { VALIDARUSUARIO } from '../Graphql/usuarios/mutations';
import { useMutation} from '@apollo/client';
import ButtonLoading from '../components/ButtonLoading';
import "./Login.css"
import {
    Link, useNavigate,
} from "react-router-dom";
import { useAuth } from '../Contexts/authContext';

export const Login = () => {
    const navigate = useNavigate();
    const auth = useAuth();
    const { form, formData, updateFormData } = useFormData();

    const [validarUsuario, {loading, error, data}] = useMutation(VALIDARUSUARIO);

    const submitForm = (e) => {
        e.preventDefault();
        validarUsuario({
            variables : formData
        });
    };

    useEffect(() => {
        if (data){
            if (data.validarUsuario.token) {
                auth.setToken(data.validarUsuario.token)
                navigate('/Index');
            }
        }
    }, [data, navigate])


    return (
        <form
            onSubmit={submitForm}
            onChange={updateFormData}
            ref={form}>
            <div id="loginSec">
                <div>
                    <img src={LogoDevinos2} />
                </div>
                <div>
                    <input
                        type="text"
                        id="input"
                        name = "correo"
                        placeholder="Correo"
                        required={true}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        id="input"
                        name = "contrasena"
                        placeholder="Contraseña"
                        required={true}
                    />
                </div>

                <ButtonLoading
                    loading={loading}
                    text='Acceder'
                />
                <div id="regcomment">¿no tienes una cuenta?</div>
                <div >
                    <Link to="/Registro" id="regLink">  Registrarse </Link>
                </div >
            </div>
        </form>
    )
}

export default Login
