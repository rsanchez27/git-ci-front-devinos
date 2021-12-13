import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PROYECTO } from '../Graphql/proyectos/queries';
import ButtonLoading from '../components/ButtonLoading';
import useFormData from '../hooks/useFormData';
import { EDITAR_PROYECTO } from '../Graphql/proyectos/mutations';
import DropDown from '../components/DropDown';
import './mainStyle.css'

const EditarProyecto = () => {

    const { form, formData, updateFormData } = useFormData(null);
    const { _id } = useParams();
    const { data: queryData, error: queryError, loading: queryLoading } = useQuery(GET_PROYECTO, {
        variables: { _id },
    });

    const [editarproyecto, { data: mutationData, loading: mutationLoading, error: mutationError }] =
        useMutation(EDITAR_PROYECTO);


    const submitForm = (e) => {
        e.preventDefault();
        editarproyecto({
            variables: { _id, ...formData},
        });
    };

    useEffect(() => {
        if (mutationData) {
            console.log("mutacion", mutationData)
        }
    }, [mutationData]);

    console.log('fd', formData)


    if (queryLoading) return <div>Cargando...</div>;

    return (
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
                        defaultValue={queryData.buscarProyecto.nombre}
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
                    required={true}
                />
                </div>

                <div>
                    <div>Objetivos específicos:</div>
                    <input
                    id="Pinput"
                    type='text'
                    name='objetivose'
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
                    required={true}
                />
                </div>
                
                <div>
                    <div>Fecha inicio:</div>
                    <input
                    id="Pinput"
                    type='text'
                    name='fechainicio'
                    defaultValue={queryData.buscarProyecto.fechainicio}
                    required={true}
                />
                </div>

                <div>
                    <div>Fecha final:</div>
                    <input
                    id="Pinput"
                    label='Fecha final'
                    type='text'
                    name='fechafinal'
                    defaultValue={queryData.buscarProyecto.fechafinal}
                    required={true}
                />
                </div>
                
                <div>
                    <div>Nombre líderl:</div>
                    <input
                    id="Pinput"
                    type='text'
                    name='nombrelider'
                    defaultValue={queryData.buscarProyecto.nombrelider}
                    required={true}
                />
                </div>

                <div>
                    <div>Estado proyecto:</div>
                    <DropDown
                        name='estado'
                        defaultValue={queryData.buscarProyecto.estado}
                        required={true}
                        options={{
                            ACTIVO: 'Activo',
                            INACTIVO: 'Inactivo',
                        }}
                    />
                </div>


                <div>
                    <div>Fase proyecto:</div>
                    <DropDown
                        name='fase'
                        defaultValue={queryData.buscarProyecto.fase}
                        required={true}
                        options={{
                            INICIADO: 'Iniciado',
                            DESARROLLO: 'En desarrollo',
                            TERMINADO: 'Terminado'
                        }}
                    />
                </div>
                
                
                <ButtonLoading
                    disabled={Object.keys(formData).length === 0}
                    loading={mutationLoading}
                    text='Confirmar'
                />
            </form>

        </div>
    );
};

export default EditarProyecto;
