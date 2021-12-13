import { gql } from '@apollo/client';

const EDITAR_USUARIO = gql`
  mutation ($_id: String!, $correo: String, $contrasena: String, $identificacion: String, $nombre: String, $rol: String, $estado: String) {
  actualizarUsuarios(_id: $_id, correo: $correo, contrasena: $contrasena, identificacion: $identificacion, nombre: $nombre, rol: $rol, estado: $estado) {
    _id
    correo
    contrasena
    identificacion
    nombre
    rol
    estado
  }
}
`;

export { EDITAR_USUARIO };
