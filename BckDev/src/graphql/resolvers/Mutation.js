import Proyecto from "../../models/Proyecto.js"
import Avance from "../../models/Avances.js"

const Mutation = {
    createProyecto: async(_, {nombre, objetivog, objetivose, presupuesto, fechainicio, fechafinal, nombrelider, idlider, estado, fase}) => {
        const newProyecto = new Proyecto({nombre, objetivog, objetivose, presupuesto, fechainicio, fechafinal, nombrelider, idlider, estado, fase})
        return await newProyecto.save()
    },
    actualizarProyecto: async(_, {_id, nombre, objetivog, objetivose, presupuesto, fechainicio, fechafinal, nombrelider, idlider, estado, fase}) => {
        const ProyectoEditado = await Proyecto.findByIdAndUpdate(_id, {
            nombre,
            objetivog,
            objetivose,
            presupuesto,
            fechainicio,
            fechafinal,
            nombrelider,
            idlider,
            estado,
            fase
        });
        return ProyectoEditado;
    },
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