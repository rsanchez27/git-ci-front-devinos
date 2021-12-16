import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { REGISTRAR_USUARIO } from '../Graphql/usuarios/mutations';
import useFormData from '../hooks/useFormData';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import DropDown from '../components/DropDown';
import ButtonLoading from '../components/ButtonLoading';
import './SignUpStyle.css'


function SignUp() {

    const { form, formData, updateFormData } = useFormData();

    const navigate = useNavigate();
    const [registrarUsuario, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
    useMutation(REGISTRAR_USUARIO);

    const submitForm = (e) => {
        e.preventDefault();
        registrarUsuario({ variables: formData });
    };

    useEffect(() => {
        if (dataMutation) {
            navigate('/');
        }
    });

    return (
        <div id="sup-section">

            <div >Registrate</div>
            <form
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form}
            >
                <div>
                    <div>Nombre:</div>
                    <input
                        required={true}
                        type="text"
                        id="Rinput"
                        name="nombre"
                    />
                </div>
                <div>
                    <div>Identificación:</div>
                    <input
                        required={true}
                        type="text"
                        id="Rinput"
                        name="identificacion"
                    />
                </div>
                <div>
                    <div>Correo:</div>
                    <input
                        required={true}
                        type="text"
                        id="Rinput"
                        name="correo"
                    />
                </div>
                <div>
                    <div>Contraseña:</div>
                    <input
                        required={true}
                        type="password"
                        id="Rinput"
                        name="contrasena"
                    />
                </div>
                <div>
                    <div>Rol:</div>
                    <DropDown
                        name='rol'
                        required={true}
                        options={{
                            ESTUDIANTE: 'Estudiante',
                            LIDER: 'Líder',
                            ADMINISTRADOR: 'Administrador',
                        }}
                    />
                </div>
                <ButtonLoading
                    loading={false}
                    text='Registrar usuario'
                />
                <span>¿Ya estás registrado?</span>
                <Link 
                id = "regLink"
                to='/'>
                    Inicia sesión
                </Link>

            </form>
        </div>
    );
}
export default SignUp;