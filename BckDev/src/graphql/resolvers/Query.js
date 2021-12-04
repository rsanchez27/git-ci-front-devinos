import Proyecto from "../../models/Proyecto.js"
import Avance from "../../models/Avances.js"

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
}

export default Query