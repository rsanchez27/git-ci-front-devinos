import { gql } from 'apollo-server-express';

const tipos = gql`

type Query {
    proyectos: [Proyecto!]
    buscarProyecto(_id: ID!): Proyecto!
    proyectoslider(idlider: ID!): [Proyecto!]
    infoProyecto(idproyecto: ID!): [Avance!]

    avances: [Avance!]
    buscarAvance(_id: ID!): Avance!

    inscripcions: [Inscripcion!]
    buscarInscripcion(_id: ID!): Inscripcion!
    inscripcionsProy(idproyecto: String!): [Inscripcion!]

    usuarios: [Usuario!]
    buscarUsuarios(_id: String!): Usuario!
    verEstudiantes(rol: String!): Usuario!
}

type Mutation {
    createProyecto(
        nombre: String!, 
        objetivog: String!, 
        objetivose: String!
        presupuesto: String!, 
        nombrelider: String!, 
        idlider: ID!, 
        ): Proyecto

    actualizarProyecto(
        _id:ID!,
        nombre: String, 
        objetivog: String, 
        objetivose: String, 
        presupuesto: String, 
        fechainicio: String, 
        fechafinal: String, 
        nombrelider: String, 
        estado: String, 
        fase: String
        ): Proyecto

    actualizarProyectoL(
        _id:ID!,
        nombre: String, 
        objetivog: String, 
        objetivose: String,
        presupuesto: String, 
        fechainicio: String, 
        fechafinal: String, 
        nombrelider: String, 
        estado: String, 
        fase: String
        ): Proyecto
    
    createAvance(
        fecha: String!, 
        descripcion: String!, 
        observaciones: String!
        idproyecto: ID!
        ): Avance

    actualizarAvance(
        _id:ID!,
        fecha: String! 
        descripcion: String! 
        observaciones: String!
        idproyecto: ID!

        ): Avance

    createInscripcion(
        idproyecto: String! 
        idestudiante: String! 
        estado: String! 
        fechaingreso: String! 
        fechaegreso: String!
        ):Inscripcion

    actualizarInscripcion(
        _id: ID!
        idproyecto: String!
        idestudiante: String!
        estado: String!
        fechaingreso: String!
        fechaegreso: String!    
        ):Inscripcion

    registrarUsuario(
        correo: String!
        contrasena: String!  
        identificacion: String!
        nombre: String!
        rol: String!
        ):Usuario

     actualizarUsuarios(
        _id: String!
        correo: String
        contrasena: String  
        identificacion: String
        nombre: String
        rol: String
        estado: String
        ):Usuario

    validarUsuario(
        correo: String!
        contrasena: String!
        ):Token

    refreshToken:Token
}

type Proyecto {
    _id: ID!
    nombre: String!
    objetivog: String!
    objetivose: String!
    presupuesto: String!
    fechainicio: String!
    fechafinal: String!
    nombrelider: String!
    idlider: String!
    estado: String!
    fase: String!
}

type Avance {
    _id: ID!
    fecha: String! 
    descripcion: String!
    observaciones: String!
    idproyecto: ID!
}

type Inscripcion {
    _id: ID!
    idproyecto: String!
    idestudiante: String!
    estado: String!
    fechaingreso: String!
    fechaegreso: String!
}

type Usuario {
    _id: ID!
    correo: String!
    contrasena: String!  
    identificacion: String!
    nombre: String!
    rol: String!
    estado: String!
}

type Token{
    token: String
    error: String
}

`;
export { tipos };