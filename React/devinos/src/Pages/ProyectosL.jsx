import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { PROYECTOS_LIDER } from "../Graphql/proyectos/queries";
import './mainStyle.css'
import PrivateRoute from "../components/PrivateRoute";
import { NavLink } from "react-router-dom";
import { useUser } from "../Contexts/userContext";

function ProyectosL() {
    const { userData } = useUser();
    const idlider = userData._id
    const { data, error, loading } = useQuery(PROYECTOS_LIDER, {
        variables: { idlider },
    });

    if (loading) return <div>Cargando...</div>;

    return (
        <PrivateRoute roleList={"LIDER"}>
            <div id="main-section">
                <div id="main-section">
                    <div id="section-title">
                        MIS PROYECTOS:
                        <div>
                            <button>

                                <NavLink to='/Index/Lider/Proyectos/Nuevo'>
                                    Nuevo proyecto
                                </NavLink>
                            </button>
                        </div>
                    </div>

                    <table id='tabla'>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Estado</th>
                                <th>Editar</th>
                                <th>Ver avances</th>
                                <th>Solicitudes</th>

                            </tr>
                        </thead>
                        <tbody>
                            {data && data.proyectoslider ? (
                                <>
                                    {data.proyectoslider.map((u) => {
                                        return (
                                            <tr key={u._id}>
                                                <td>{u.nombre}</td>
                                                <td>{u.estado}</td>
                                                <td>
                                                    <Link to={`/Index/Lider/Proyectos/Editar/${u._id}`}> Editar
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link to={`/Index/Lider/Proyectos/Info/${u._id}`}> Info
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link to={`/Index/Lider/Proyectos/Solicitudes/${u._id}`}> Solicitudes
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
            </div>
        </PrivateRoute>
    );
}
export default ProyectosL;