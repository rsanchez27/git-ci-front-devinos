import Avance from "../../../models/Avances.js"

const Query = {
    avances: async() => {
        return await Avance.find()
    },
    buscarAvance: async(_,_id) => {
        return await Avance.findOne(_id)
    },
}

export default Query