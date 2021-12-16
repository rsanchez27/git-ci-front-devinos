import Proyecto from "../../models/Proyecto.js"
import Avance from "../../models/Avances.js"
import Inscripcion from "../../models/Inscripcion.js"
import Usuario from "../../models/Usuario.js"
import bcrypt from 'bcrypt'
import { generateToken } from "../../Utils/tokenUtils.js"

const Mutation = {
    createProyecto: async (_, { nombre, objetivog, objetivose, presupuesto, nombrelider, idlider }) => {
        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);
        const fechainicio = hoy.toLocaleDateString();
        const fechafinal = ""
        const estado = "INACTIVO"
        const fase = ""
        const newProyecto = new Proyecto({ nombre, objetivog, objetivose, presupuesto, fechainicio, fechafinal, nombrelider, idlider, estado, fase })
        return await newProyecto.save()
    },
    actualizarProyecto: async (_, { _id, nombre, objetivog, objetivose, presupuesto, fechainicio, fechafinal, nombrelider, estado, fase }) => {
        const actualProyect = await Proyecto.findOne({_id: _id})
        if ((fase == "TERMINADO") && (actualProyect.fase != "TERMINADO")){
            estado = "INACTIVO"
            const tiempoTranscurrido = Date.now();
            const hoy = new Date(tiempoTranscurrido);
            fechafinal = hoy.toLocaleDateString();

        }
        if ((actualProyect.fase == "TERMINADO")){
            return actualProyect;

        }
        if ((estado == "ACTIVO") && (actualProyect.fase == "")){
            fase = "INICIADO"
        }
        const ProyectoEditado = await Proyecto.findByIdAndUpdate(_id, {
            nombre,
            objetivog,
            objetivose,
            presupuesto,
            fechainicio,
            fechafinal,
            nombrelider,
            estado,
            fase
        });
        return ProyectoEditado;
    },
    actualizarProyectoL: async (_, { _id, nombre, objetivog, objetivose, presupuesto, fechainicio, fechafinal, nombrelider, estado, fase }) => {

        const ProyectoEditado = await Proyecto.findByIdAndUpdate(_id, {
            nombre,
            objetivog,
            objetivose,
            presupuesto,
            fechainicio,
            fechafinal,
            nombrelider,
            estado,
            fase
        });
        return ProyectoEditado;
    },
    createAvance: async (_, { fecha, descripcion, observaciones, idproyecto }) => {
        const newAvance = new Avance({ fecha, descripcion, observaciones, idproyecto })
        return await newAvance.save()
    },
    actualizarAvance: async (_, { _id, fecha, descripcion, observaciones, idproyecto }) => {
        const avanceEditado = await Avance.findByIdAndUpdate(_id, {
            fecha,
            descripcion,
            observaciones,
            idproyecto
        });
        return avanceEditado;
    },
    createInscripcion: async (_, { idproyecto, idestudiante }) => {
        const ExisteInscripcion = await Inscripcion.findOne({ idproyecto, idestudiante })
        if (ExisteInscripcion){
            return ExisteInscripcion
        } else {

            const fechaegreso = ""
            const fechaingreso = ""
            const estado = "PENDIENTE"
            const newInscripcion = new Inscripcion({ idproyecto, idestudiante, estado, fechaingreso, fechaegreso })
    
            return await newInscripcion.save()

        }

    },
    actualizarInscripcion: async (_, { _id, idproyecto, idestudiante, estado, fechaingreso, fechaegreso }) => {
        const actualInscripcion = await Inscripcion.findOne({_id: _id})
        if (actualInscripcion.estado == "RECHAZADA"){
            return actualInscripcion;
        }else if ((estado == "ACEPTADA") && (actualInscripcion.estado == "PENDIENTE")){
            const tiempoTranscurrido = Date.now();
            const hoy = new Date(tiempoTranscurrido);
            fechaingreso = hoy.toLocaleDateString();
            const InscripcionEditado = await Inscripcion.findByIdAndUpdate(_id, {
                idproyecto,
                idestudiante,
                estado,
                fechaingreso,
                fechaegreso
            });
            return InscripcionEditado;
        }else{
            const InscripcionEditado = await Inscripcion.findByIdAndUpdate(_id, {
                idproyecto,
                idestudiante,
                estado,
                fechaingreso,
                fechaegreso
            });
            return InscripcionEditado;
        }

    },
    registrarUsuario: async (_, { correo, contrasena, identificacion, nombre, rol }) => {
        const salt = await bcrypt.genSalt(5)
        const hashedPassword = await bcrypt.hash(contrasena, salt)
        const newUser = new Usuario({
            correo,
            contrasena: hashedPassword,
            identificacion,
            nombre,
            rol,
            estado: "PENDIENTE"
        })
        return await newUser.save()
    },
    actualizarUsuarios: async (_, { _id, correo, contrasena, identificacion, nombre, rol, estado }) => {
        if ((contrasena == "")||(contrasena == null)){
            const UsuarioEditado = await Usuario.findByIdAndUpdate(_id, {
                correo,
                identificacion,
                nombre,
                rol,
                estado
            });
            return UsuarioEditado;
            
        }else{
            const salt = await bcrypt.genSalt(5)
            const hashedPassword = await bcrypt.hash(contrasena, salt)
            const UsuarioEditado = await Usuario.findByIdAndUpdate(_id, {
                correo,
                contrasena: hashedPassword,
                identificacion,
                nombre,
                rol,
                estado
            });
            return UsuarioEditado;
        }
        
        
    },
    validarUsuario: async (_, { correo, contrasena }) => {
        const usuarioEncontrado = await Usuario.findOne({ correo });
        if (await bcrypt.compare(contrasena, usuarioEncontrado.contrasena)) {
            if (usuarioEncontrado.estado == "AUTORIZADO" ){
                return {
                    token: generateToken({
                        _id: usuarioEncontrado._id,
                        nombre: usuarioEncontrado.nombre,
                        identificacion: usuarioEncontrado.identificacion,
                        correo: usuarioEncontrado.correo,
                        rol: usuarioEncontrado.rol,
                        estado: usuarioEncontrado.estado
                    })
                }
            }else{
            }

        }

    },
    refreshToken: async (parent, args, context) => {
        if (!context.userData) {
            return {
                error: 'token no valido',
            };
        } else {
            return {
                token: generateToken({
                    _id: context.userData._id,
                    nombre: context.userData.nombre,
                    apellido: context.userData.apellido,
                    identificacion: context.userData.identificacion,
                    correo: context.userData.correo,
                    rol: context.userData.rol,
                }),
            };
        };
    }
};

export default Mutation;