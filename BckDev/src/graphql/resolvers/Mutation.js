import Proyecto from "../../models/Proyecto.js"

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
    }
}

export default Mutation