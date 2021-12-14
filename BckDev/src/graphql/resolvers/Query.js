import Proyecto from "../../models/Proyecto.js"
import Avance from "../../models/Avances.js"
import Inscripcion from "../../models/Inscripcion.js"
import Usuario from "../../models/Usuario.js"

const Query = {
    proyectos: async() => {
        return await Proyecto.find()
    },
    buscarProyecto: async(_,_id) => {
        return await Proyecto.findOne(_id)
    },
    infoProyecto: async(_,idproyecto) => {
        return await Avance.find(idproyecto)
    },
    proyectoslider: async(_, nombrelider) => {
        return await Proyecto.find(nombrelider)
    },

    avances: async() => {
        return await Avance.find()
    },
    buscarAvance: async(_,_id) => {
        return await Avance.findOne(_id)
    },

    inscripcions: async () => {
        return await Inscripcion.find()
    },
    buscarInscripcion: async(_,_id) => {
        return await Inscripcion.findOne(_id)
    },
    inscripcionsProy: async(_, idproyecto) => {
        return await Inscripcion.find(idproyecto)
    },

    usuarios: async () => {
        return await Usuario.find()
    },
    buscarUsuarios: async(_,_id) => {
        return await Usuario.findOne(_id)
        
    },
    verEstudiantes: async(_,rol) => {
        return await Usuario.findOne(rol)
    },

}

export default Query