import React from 'react';
import { GET_USUARIO } from "../Graphql/usuarios/queries";
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { EDITAR_USUARIO } from '../Graphql/usuarios/mutations';
import useFormData from '../hooks/useFormData';
import { useParams } from 'react-router-dom';
import DropDown from '../components/DropDown';
import ButtonLoading from '../components/ButtonLoading';
import PrivateRoute from '../components/PrivateRoute';
import './mainStyle.css'


const EditarUsuario = () => {
    const { form, formData, updateFormData } = useFormData(null);
    const { _id } = useParams();
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
        await actualizarUsuarios({
            variables: { _id, ...formData },
        });
    };


    if (loading) return <div>Loading</div>;


    return (

        <PrivateRoute roleList={["ADMINISTRADOR", "LIDER"]}>
            <div id="main-section">

                <div id="section-title">Editar Usuario</div>
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
                            id="Edinput"
                            name="nombre"
                            disabled={true}
                            defaultValue={data.buscarUsuarios.nombre}
                        />
                    </div>
                    <div>
                        <div>Identificación:</div>
                        <input
                            type="text"
                            id="Edinput"
                            name="identificacion"
                            disabled={true}
                            defaultValue={data.buscarUsuarios.identificacion}
                        />
                    </div>
                    <div>
                        <div>Correo:</div>
                        <input
                            type="text"
                            id="Edinput"
                            name="correo"
                            disabled={true}
                            defaultValue={data.buscarUsuarios.correo}
                        />
                    </div>
                    <div>
                        <div>Rol:</div>
                        <input
                            type="text"
                            id="Edinput"
                            name="rol"
                            disabled={true}
                            defaultValue={data.buscarUsuarios.rol}
                        />
                    </div>
                    <div>
                        <div>Estado:</div>
                        <DropDown
                            label='Estado Usuario:'
                            name='estado'
                            defaultValue={data.buscarUsuarios.estado}
                            required={true}
                            options={{
                                PENDIENTE: 'Pendiente',
                                AUTORIZADO: 'Autorizado',
                                NO_AUTORIZADO: 'No autorizado',
                            }}
                        />
                    </div>
                    <ButtonLoading
                        disabled={Object.keys(formData).length === 0}
                        loading={loadingMutation}
                        text='Confirmar'
                    />

                </form>
            </div>
        </PrivateRoute>
    );
};

export default EditarUsuario;