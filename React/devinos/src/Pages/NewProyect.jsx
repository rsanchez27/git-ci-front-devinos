import React, { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import ButtonLoading from '../components/ButtonLoading';
import useFormData from '../hooks/useFormData';
import PrivateRoute from '../components/PrivateRoute';
import { NUEVO_PROYECTO } from '../Graphql/proyectos/mutations';
import { useUser } from '../Contexts/userContext';
import './mainStyle.css'

const EditarProyecto = () => {
    const { form, formData, updateFormData } = useFormData();
    const { userData } = useUser();
    const idlider = userData._id
    const nombrelider = userData.nombre

    const [createProyecto, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
        useMutation(NUEVO_PROYECTO);

    const submitForm = (e) => {
        e.preventDefault();
        console.log("datos nuevo Proyecto", idlider, nombrelider, formData)
        createProyecto({ 
            variables: { idlider, nombrelider, ...formData }
        });
        

    };

    useEffect(() => {
        if (dataMutation) {
            console.log("datos nuevo Proyecto", dataMutation)
        }
    });
    



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
                            required={true}
                        />
                    </div>

                    <div>
                        <div>Objetivo General:</div>
                        <input
                            id="Pinput"
                            type='text'
                            name='objetivog'
                            required={true}
                        />
                    </div>

                    <div>
                        <div>Objetivo Especifico:</div>
                        <input
                            id="Pinput"
                            type='text'
                            name='objetivose'
                            required={true}
                        />
                    </div>


                    <div>
                        <div>Presupuesto:</div>
                        <input
                            id="Pinput"
                            type='number'
                            name='presupuesto'
                            required={true}
                        />
                    </div>


                    <ButtonLoading
                        loading={false}
                        text='Confirmar'
                    />
                </form>

            </div>
        </PrivateRoute>
    );
};

export default EditarProyecto;
