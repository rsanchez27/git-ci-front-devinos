import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PROYECTO } from '../Graphql/proyectos/queries';
import ButtonLoading from '../components/ButtonLoading';
import PrivateRoute from '../components/PrivateRoute';
import './mainStyle.css'
import { INSCRIBIR } from '../Graphql/inscripciones/mutations';
import { useUser } from '../Contexts/userContext';
import { useNavigate } from 'react-router';

function NewInscripcion() {
    const { _id } = useParams();
    const { userData } = useUser();
    const { data: queryData, error: queryError, loading: queryLoading } = useQuery(GET_PROYECTO, {
        variables: { _id },
    });

    const idproyecto = _id
    const idestudiante = userData._id

    const [createInscripcion, { data: mutationData, loading: mutationLoading, error: mutationError }] =
    useMutation(INSCRIBIR);

    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        createInscripcion({
            variables: { idproyecto, idestudiante },
        });

        navigate('/Index/Estudiante/Proyectos');
    };

    if (queryLoading) return <div>Cargando...</div>;
    return (
        <PrivateRoute roleList={"ESTUDIANTE"}>
            <div id="main-section">
                <form
                    id="formEditar"
                    onSubmit={submitForm}
                >
                    <div>

                        <div>Unirse al propyecto:</div>
                        <input
                            id="Vinput"
                            type='text'
                            name='nombre'
                            defaultValue={queryData.buscarProyecto.nombre}
                            disabled={true}
                            required={true}
                        />

                    </div>

                    <ButtonLoading
                        disabled={false}
                        loading={false}
                        text='Enviar inscripción'
                    />


                </form>
            </div>
        </PrivateRoute>
    );
}
export default NewInscripcion;