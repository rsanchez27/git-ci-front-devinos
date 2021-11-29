import Proyecto from "../../models/Proyecto.js"

const Query = {
    proyectos: async () => {
        return await Proyecto.find()
    }
}

export default Query