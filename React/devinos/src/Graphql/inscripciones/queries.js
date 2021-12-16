import { gql } from '@apollo/client';

const INSCRIPCIONES_PROYECTO = gql`
query InscripcionsProy($idproyecto: ID!) {
  inscripcionsProy(idproyecto: $idproyecto) {
    _id
    idproyecto
    idestudiante
    estado
    fechaingreso
    fechaegreso
  }
}
`;

const INSCRIPCION = gql`
query BuscarInscripcion($_id: ID!) {
  buscarInscripcion(_id: $_id) {
    _id
    idproyecto
    idestudiante
    estado
    fechaingreso
    fechaegreso
  }
}
`;


export {INSCRIPCIONES_PROYECTO, INSCRIPCION};

