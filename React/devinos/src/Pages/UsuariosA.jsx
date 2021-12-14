import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_USUARIOS } from "../Graphql/usuarios/queries";
import { Link } from "react-router-dom";
import PrivateRoute from '../components/PrivateRoute';
import './mainStyle.css'
function Usuarios() {
  const { data, error, loading } = useQuery(GET_USUARIOS);
  useEffect(() => {
    console.log("data servidor", data)
  }, [data])


  return (
    <PrivateRoute roleList={"ADMINISTRADOR"}>
      <div id="main-section">
        <div id="section-title">
          Usuarios
        </div>
        <table id="tabla">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Identificación</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {data && data.usuarios ? (
              <>
                {data.usuarios.map((u) => {
                  return (
                    <tr key={u._id}>
                      <td>{u.nombre}</td>
                      <td>{u.correo}</td>
                      <td>{u.identificacion}</td>
                      <td>{u.rol}</td>
                      <td>{u.estado}</td>
                      <td>
                        <Link to={`/Index/usuarios/editar/${u._id}`}> Editar
                          <i className='fas fa-pen text-yellow-600 hover:text-yellow-400 cursor-pointer' />
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
      </div>;
    </PrivateRoute>
  )
}
export default Usuarios;