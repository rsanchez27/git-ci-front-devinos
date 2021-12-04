import Avance from "../../../models/Avances.js";


const Mutation = {
    createAvance: async(_, {fecha,descripcion,observaciones, proyecto}) => {
        const newAvance = new Avance({fecha,descripcion,observaciones, proyecto})
        return await newAvance.save()
    },
    actualizarAvance: async(_, {fecha,descripcion,observaciones, proyecto}) => {
        const avanceEditado = await Avance.findByIdAndUpdate(_id, {
            fecha,
            descripcion,
            observaciones,
            proyecto,
        });
        return avanceEditado;
    }
}

export default Mutation