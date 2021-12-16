import { gql } from '@apollo/client';

const INSCRIBIR = gql`
mutation CreateInscripcion($idproyecto: ID!, $idestudiante: ID!) {
  createInscripcion(idproyecto: $idproyecto, idestudiante: $idestudiante) {
    _id
    idproyecto
    idestudiante
    estado
    fechaingreso
    fechaegreso
  }
}
`;

const ACTUALIZAR_INSCRIPCION = gql`

mutation ActualizarInscripcion($_id: ID!, $idproyecto: String, $idestudiante: String, $estado: String, $fechaingreso: String, $fechaegreso: String) {
    actualizarInscripcion(_id: $_id, idproyecto: $idproyecto, idestudiante: $idestudiante, estado: $estado, fechaingreso: $fechaingreso, fechaegreso: $fechaegreso) {
      _id
      idproyecto
      idestudiante
      estado
      fechaingreso
      fechaegreso
    }
  }
`;
  

export { INSCRIBIR, ACTUALIZAR_INSCRIPCION };