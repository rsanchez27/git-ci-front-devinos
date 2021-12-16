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

const REGISTRAR_USUARIO = gql`
    mutation ($correo: String!, $contrasena: String!, $identificacion: String!, $nombre: String!, $rol: String!) {
        registrarUsuario(correo: $correo, contrasena: $contrasena, identificacion: $identificacion, nombre: $nombre, rol: $rol) {
            _id
            correo
            contrasena
            identificacion
            nombre
            rol
        }
    }  
`;

const VALIDARUSUARIO = gql`
mutation ($correo: String!, $contrasena: String!) {
  validarUsuario(correo: $correo, contrasena: $contrasena) {
    token
    error
  }
}

`;

export { EDITAR_USUARIO, REGISTRAR_USUARIO, VALIDARUSUARIO };
