import { gql } from '@apollo/client';

const VALIDARUSUARIO = gql`
query validarUsuario($correo: String!, $contrasena: String!) {
  validarUsuario(correo: $correo, contrasena: $contrasena) {
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

const GET_USUARIOS = gql`
query Usuarios {
  usuarios {
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

const GET_USUARIO = gql`
  query ($_id: String!) {
  buscarUsuarios(_id: $_id) {
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

export { VALIDARUSUARIO, GET_USUARIOS, GET_USUARIO };
