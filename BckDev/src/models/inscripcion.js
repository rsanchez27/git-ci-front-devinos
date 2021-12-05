import pkg from 'mongoose';
const { Schema, model } = pkg;


const inscripcionSchema = new Schema({
    idproyecto:{
        type: String,
        required: true
    },
    idestudiante: {
        type: String,
        required: true
    }, 
    estado: {
        type: String,
        required: true
    },
    fechaingreso:{
        type: String,
        required: true
    },
    fechaegreso:{
        type: String,
        required: true
    }
});
export default model("Inscripcion", inscripcionSchema )