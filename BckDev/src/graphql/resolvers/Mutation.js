import Proyecto from "../../models/Proyecto.js"
import Avance from "../../models/Avances.js"
import Inscripcion from "../../models/Inscripcion.js"
import Usuario from "../../models/Usuario.js"

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
    },
    createInscripcion: async(_, {idproyecto, idestudiante, estado, fechaingreso, fechaegreso}) => {
        const newInscripcion = new Inscripcion({idproyecto, idestudiante, estado, fechaingreso, fechaegreso})
        return await newInscripcion.save()
    },
    actualizarInscripcion: async(_, {_id, idproyecto, idestudiante, estado, fechaingreso, fechaegreso}) => {
        const InscripcionEditado = await Inscripcion.findByIdAndUpdate(_id, {
            idproyecto,
            idestudiante,
            estado,
            fechaingreso,
            fechaegreso
        });
        return InscripcionEditado;
    },
    registrarUsuario: async(_, {correo, contrasena, identificacion, nombre, rol, estado}) => {
        const newUser = new Usuario({
            correo, 
            contrasena, 
            identificacion, 
            nombre, 
            rol, 
            estado
        })
        return await newUser.save()
    },
    actualizarUsuarios: async(_, {_id, correo, contrasena, identificacion, nombre, rol, estado}) => {
        const UsuarioEditado = await Usuario.findByIdAndUpdate(_id, {
            correo, 
            contrasena, 
            identificacion, 
            nombre, 
            rol, 
            estado
        });
        return UsuarioEditado;
    }
}

export default Mutation