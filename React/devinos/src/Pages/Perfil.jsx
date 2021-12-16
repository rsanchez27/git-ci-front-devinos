import React from 'react';
import { GET_USUARIO } from "../Graphql/usuarios/queries";
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { EDITAR_USUARIO } from '../Graphql/usuarios/mutations';
import useFormData from '../hooks/useFormData';
import ButtonLoading from '../components/ButtonLoading';
import { useUser } from '../Contexts/userContext';
import './mainStyle.css'


const Perfil = () => {
    const { form, formData, updateFormData } = useFormData(null);
    const { userData } = useUser();
    const _id = userData._id
    const {
        loading,
        error,
        data,
    } = useQuery(GET_USUARIO, {
        variables: { _id },
    });

    const [actualizarUsuarios, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
        useMutation(EDITAR_USUARIO);

    const submitForm = async (e) => {
        e.preventDefault();
        console.log(_id );
      await actualizarUsuarios({
            variables: { _id, ...formData },
        });
    };


    if (loading) return <div>Loading</div>;


    return (


        <div id="main-section">
         
            <div id="section-title">Mis datos</div>
            <form
                id="formEditar"
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form}
            >
                <div>
                    <div>Nombre:</div>
                    <input
                        type="text"
                        id="Pinput"
                        name="nombre"
                        defaultValue={userData.nombre}
                    />
                </div>
                <div>
                    <div>Identificación:</div>
                    <input
                        type="text"
                        id="Pinput"
                        name="identificacion"
                        defaultValue={userData.identificacion}
                    />
                </div>
                <div>
                    <div>Correo:</div>
                    <input
                        type="text"
                        id="Pinput"
                        name="correo"
                        defaultValue={userData.correo}
                    />
                </div>
                <div>
                    <div>Contraseña:</div>
                    <input
                        type="password"
                        id="Pinput"
                        name="contrasena"
                        defaultValue={null}
                    />
                </div>
                <div>
                    <div>Rol:</div>
                    <input
                        type="text"
                        id="Pinput"
                        name="rol"
                        disabled={true}
                        defaultValue={userData.rol}
                    />
                </div>

                <ButtonLoading
                    disabled={Object.keys(formData).length === 0}
                    loading={loadingMutation}
                    text='Confirmar'
                />

            </form>
        </div>
    );
};

export default Perfil;