import { gql } from '@apollo/client';

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

export { GET_USUARIOS, GET_USUARIO };
