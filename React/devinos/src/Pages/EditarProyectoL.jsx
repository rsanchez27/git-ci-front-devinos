import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PROYECTO } from '../Graphql/proyectos/queries';
import ButtonLoading from '../components/ButtonLoading';
import useFormData from '../hooks/useFormData';
import { EDITAR_PROYECTO_LIDER } from '../Graphql/proyectos/mutations';
import DropDown from '../components/DropDown';
import PrivateRoute from '../components/PrivateRoute';
import './mainStyle.css'

const EditarProyecto = () => {

    const { form, formData, updateFormData } = useFormData(null);
    const { _id } = useParams();
    const { data: queryData, error: queryError, loading: queryLoading } = useQuery(GET_PROYECTO, {
        variables: { _id },
    });

    const [editarproyecto, { data: mutationData, loading: mutationLoading, error: mutationError }] =
        useMutation(EDITAR_PROYECTO_LIDER);



    const submitForm = (e) => {
        e.preventDefault();
        editarproyecto({
            variables: { _id, ...formData },
        });
    };





    if (queryLoading) return <div>Cargando...</div>;

    return (
        <PrivateRoute roleList={"LIDER"}>
            <div id="main-section">

                <div id="section-title">Informacion del Proyecto</div>

                <form
                    id="formEditar"
                    onSubmit={submitForm}
                    onChange={updateFormData}
                    ref={form}
                >
                    <div>
                        <div>Nombre del proyecto:</div>
                        <input
                            id="Pinput"
                            type='text'
                            name='nombre'
                            defaultValue={(queryData.buscarProyecto.nombre)}
                            disabled={(queryData.buscarProyecto.estado != "ACTIVO")}
                            required={true}
                        />
                    </div>

                    <div>
                        <div>Objetivo General:</div>
                        <input
                            id="Pinput"
                            type='text'
                            name='objetivog'
                            defaultValue={queryData.buscarProyecto.objetivog}
                            disabled={(queryData.buscarProyecto.estado != "ACTIVO")}
                            required={true}
                        />
                    </div>

                    <div>
                        <div>Objetivo Especifico:</div>
                        <input
                            id="Pinput"
                            type='text'
                            name='objetivose'
                            disabled={(queryData.buscarProyecto.estado != "ACTIVO")}
                            defaultValue={queryData.buscarProyecto.objetivose}
                            required={true}
                        />
                    </div>

                    <div>
                        <div>Presupuesto:</div>
                        <input
                            id="Pinput"
                            type='number'
                            name='presupuesto'
                            defaultValue={queryData.buscarProyecto.presupuesto}
                            disabled={(queryData.buscarProyecto.estado != "ACTIVO")}
                            required={true}
                        />
                    </div>

                    <div>
                        <div>Estado proyecto:</div>
                        <input
                            id="Edinput"
                            type='text'
                            name='estado'
                            defaultValue={queryData.buscarProyecto.estado}
                            disabled={true}
                            required={true}
                        />
                    </div>


                    <ButtonLoading
                        disabled={(queryData.buscarProyecto.estado != "ACTIVO")}
                        loading={mutationLoading}
                        text='Confirmar'
                    />
                </form>

            </div>
        </PrivateRoute>
    );
};

export default EditarProyecto;