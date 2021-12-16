import {gql} from '@apollo/client'


const EDITAR_PROYECTO = gql`
mutation Mutation($_id: ID!, $nombre: String, $objetivog: String, $objetivose: String, $presupuesto: String, $fechainicio: String, $fechafinal: String, $nombrelider: String, $estado: String, $fase: String) {
  actualizarProyecto(_id: $_id, nombre: $nombre, objetivog: $objetivog, objetivose: $objetivose, presupuesto: $presupuesto, fechainicio: $fechainicio, fechafinal: $fechafinal, nombrelider: $nombrelider, estado: $estado, fase: $fase) {
    _id
    nombre
    objetivog
    objetivose
    presupuesto
    fechainicio
    fechafinal
    nombrelider
    estado
    fase
  }
}
`;

const EDITAR_PROYECTO_LIDER = gql`
mutation ($_id: ID!, $nombre: String, $objetivog: String, $objetivose: String, $presupuesto: String, $fechainicio: String, $fechafinal: String, $nombrelider: String, $estado: String, $fase: String) {
  actualizarProyectoL(_id: $_id, nombre: $nombre, objetivog: $objetivog, objetivose: $objetivose, presupuesto: $presupuesto, fechainicio: $fechainicio, fechafinal: $fechafinal, nombrelider: $nombrelider, estado: $estado, fase: $fase) {
    _id
    nombre
    objetivog
    objetivose
    presupuesto
    fechainicio
    fechafinal
    nombrelider
    idlider
    estado
    fase
  }
}
`;

const NUEVO_PROYECTO = gql`
mutation ($nombre: String!, $objetivog: String!, $objetivose: String!, $presupuesto: String!, $nombrelider: String!, $idlider: ID!) {
  createProyecto(nombre: $nombre, objetivog: $objetivog, objetivose: $objetivose, presupuesto: $presupuesto, nombrelider: $nombrelider, idlider: $idlider) {
    _id
    nombre
    objetivog
    objetivose
    presupuesto
    fechainicio
    fechafinal
    nombrelider
    estado
    fase
  }
}
`;

export {EDITAR_PROYECTO, NUEVO_PROYECTO, EDITAR_PROYECTO_LIDER};