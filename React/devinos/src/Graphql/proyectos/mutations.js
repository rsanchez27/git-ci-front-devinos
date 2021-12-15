import {gql} from '@apollo/client'


const EDITAR_PROYECTO = gql`
mutation Mutation($_id: ID!, $nombre: String, $objetivog: String, $objetivose: [String], $presupuesto: String, $fechainicio: String, $fechafinal: String, $nombrelider: String, $estado: String, $fase: String) {
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

export {EDITAR_PROYECTO};