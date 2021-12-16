import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_PROYECTOS } from "../Graphql/proyectos/queries";
import './mainStyle.css'
import PrivateRoute from "../components/PrivateRoute";
import { NavLink } from "react-router-dom";


function ProyectosE() {
    const { data, error, loading } = useQuery(GET_PROYECTOS);
    useEffect(() => {
        console.log("data servidor", data)
    }, [data])

    if (loading) return <div>Cargando...</div>;

    return (
        <PrivateRoute roleList={"ESTUDIANTE"}>
            <div id="main-section">
                <div id = "grupTB">
                    <div id="section-title">
                        PROYECTOS:
                    </div>
                    <button id="side-button">
                        <NavLink to='/Index/Estudiante/Proyectos/MisProyectos'>
                            Mis proyectos
                        </NavLink>
                    </button>

                </div>



                <table id='tabla'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Estado</th>
                            <th>Líder</th>
                            <th>Ver proyecto </th>
                            <th>Inscripción </th>

                        </tr>
                    </thead>
                    <tbody>
                        {data && data.proyectos ? (
                            <>
                                {data.proyectos.map((u) => {
                                    return (
                                        <tr key={u._id}>
                                            <td>{u.nombre}</td>
                                            <td>{u.estado}</td>
                                            <td>{u.nombrelider}</td>
                                            <td>
                                                <Link to={`/Index/Proyectos/editar/${u._id}`}> Info
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={`/Index/Estudiante/Proyectos/Incripcion/${u._id}`}> Unirse
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </>
                        ) : (
                            <div>No hay proyectos</div>
                        )}
                    </tbody>
                </table>
            </div>
        </PrivateRoute>
    );
};
export default ProyectosE;