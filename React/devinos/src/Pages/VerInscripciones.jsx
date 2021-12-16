import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import './mainStyle.css'
import PrivateRoute from "../components/PrivateRoute";
import { useParams } from "react-router-dom";
import { INSCRIPCIONES_PROYECTO } from "../Graphql/inscripciones/queries";
function VerInscripciones() {
    const { _id } = useParams();

    const idproyecto = _id

    const { data: queryData, error: queryError, loading: queryLoading } = useQuery(INSCRIPCIONES_PROYECTO, {
        variables: { idproyecto },
    });

  
    if (queryLoading) return <div>Cargando...</div>;
    return (
        <PrivateRoute roleList={"ALIDER"}>
        <div id="main-section">
          <div id="section-title">
            Incripciones:
          </div>
  
          <table id='tabla'>
            <thead>
              <tr>
                <th>ID estudiante</th>
                <th>Estado</th>
                <th>Ver solicitud</th>
  
              </tr>
            </thead>
            <tbody>
              {queryData && queryData.inscripcionsProy ? (
                <>
                  {queryData.inscripcionsProy.map((u) => {
                    return (
                      <tr key={u._id}>
                        <td>{u.idestudiante}</td>
                        <td>{u.estado}</td>
                        <td>
                          <Link to={`/Index/Lider/Proyectos/Solicitudes/edit/${u.idestudiante}/${u._id}`}> Info
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </>
              ) : (
                <div>No hay inscripciones en este proyecto</div>
              )}
            </tbody>
          </table>
        </div>
      </PrivateRoute>
    );
}
export default VerInscripciones;