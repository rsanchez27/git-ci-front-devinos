import Proyecto from "../../models/Proyecto.js"

const Mutation = {
    createProyecto: async(_, {nombre, objetivog, objetivose, presupuesto, fechainicio, fechafinal, nombrelider, idlider, estado, fase}) => {
        const newProyecto = new Proyecto({nombre, objetivog, objetivose, presupuesto, fechainicio, fechafinal, nombrelider, idlider, estado, fase})
        return await newProyecto.save()
    },
}

export default Mutation