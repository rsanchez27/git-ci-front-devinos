import React from "react";
import './mainStyle.css'
import PrivateRoute from "../components/PrivateRoute";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USUARIO } from "../Graphql/usuarios/queries";
import { INSCRIPCION } from "../Graphql/inscripciones/queries"
import useFormData from "../hooks/useFormData";
import { ACTUALIZAR_INSCRIPCION } from "../Graphql/inscripciones/mutations";
import DropDown from "../components/DropDown";
import ButtonLoading from "../components/ButtonLoading";
import { useNavigate } from "react-router-dom";

function VerInscripcion() {
    const { form, formData, updateFormData } = useFormData(null);
    const { idestudiante, _id } = useParams()
    const {
        loading: uloading,
        data: udata,
    } = useQuery(GET_USUARIO, {
        variables: { _id: idestudiante },
    });

    const {
        loading: iloading,
        data: idata,
    } = useQuery(INSCRIPCION, {
        variables: { _id },
    });

    const navigate = useNavigate();

    const [actualizarInscripcion, { data: mutationData, loading: mutationLoading, error: mutationError }] =
        useMutation(ACTUALIZAR_INSCRIPCION);


    const submitForm = (e) => {
        e.preventDefault();
        actualizarInscripcion({
            variables: { _id, ...formData },
        });
        navigate("/Index/Lider/Proyectos")
    };

    if (iloading || uloading) return <div>Loading</div>;

    return (
        <PrivateRoute roleList={"LIDER"}>
            <div id="main-section">

                <form
                    id="formEditar"
                    onSubmit={submitForm}
                    onChange={updateFormData}
                    ref={form}
                >

                        <div1 id="msjpy">
                            {udata.buscarUsuarios.nombre} desea unirse al proyecto
                        </div1>


                    <div>
                        <div>Definir estado:</div>
                        <DropDown
                            name='estado'
                            defaultValue={idata.buscarInscripcion.estado}
                            required={false}
                            options={{
                                PENDIENTE: 'Pendiente',
                                ACEPTADA: 'Aceptada',
                                RECHAZADA: 'Rechazada',
                            }}
                        />

                    </div>



                    <ButtonLoading
                        disabled={Object.keys(formData).length === 0}
                        loading={false}
                        text='Guardar cambio'
                    />


                </form>
            </div>
        </PrivateRoute>
    );
}
export default VerInscripcion;