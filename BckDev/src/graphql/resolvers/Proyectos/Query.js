import Proyecto from "../../models/Proyecto.js"

const Query = {
    proyectos: async() => {
        return await Proyecto.find()
    },
    buscarProyecto: async(_,_id) => {
        return await Proyecto.findOne(_id)
    },
    proyectoslider: async(_, nombrelider) => {
        return await Proyecto.find(nombrelider)
    }
}

export default Query