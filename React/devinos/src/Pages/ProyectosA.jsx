import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_PROYECTOS } from "../Graphql/proyectos/queries";
import './mainStyle.css'
import PrivateRoute from "../components/PrivateRoute";
function ProyectosA() {
  const { data, error, loading } = useQuery(GET_PROYECTOS);
  useEffect(() => {
    console.log("data servidor", data)
  }, [data])

  if (loading) return <div>Cargando...</div>;

  return (
    <PrivateRoute roleList={"ADMINISTRADOR"}>
      <div id="main-section">
        <div id="section-title">
          PROYECTOS:
        </div>

        <table id='tabla'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Estado</th>
              <th>Líder</th>
              <th>Ver Proyecto</th>

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
                    </tr>
                  );
                })}
              </>
            ) : (
              <div>No autorizado</div>
            )}
          </tbody>
        </table>
      </div>
    </PrivateRoute>
  );
}
export default ProyectosA;