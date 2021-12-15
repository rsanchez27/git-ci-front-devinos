import pkg from 'mongoose';
const { Schema, model } = pkg;


const proyectoSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    objetivog: {
        type: String,
        required: true
    }, 
    objetivose: {
        type: String,
        required: true
    },
    presupuesto:{
        type: String,
        required: true
    },
    fechainicio:{
        type: String,
        required: true
    },
    fechafinal:{
        type: String,
    },
    nombrelider:{
        type: String,
        required: true
    },
    idlider:{
        type: String,
        required: true
    },
    estado:{
        type: String,
        required: true
    },
    fase:{
        type: String,
    }
});
export default model("Proyecto", proyectoSchema )
