import pkg from 'mongoose';
const { Schema, model } = pkg;


const usuarioSchema = new Schema({

    correo:{
        type: String,
        required: true
    },
    contrasena:{
        type: String,
        required: true
    },
    identificacion: {
        type: String,
        required: true
    }, 
    nombre: {
        type: String,
        required: true
    },
    rol: { 
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    }
});
export default model("Usuario", usuarioSchema )