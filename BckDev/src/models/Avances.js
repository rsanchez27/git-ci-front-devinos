import pkg from 'mongoose';
const { Schema, model } = pkg;


const avanceSchema = new Schema({

        proyecto: {
          type: Schema.Types.ObjectId,
          ref: Proyecto,
          required: true,
        },
        
        fecha: {
          type: Date,
          required: true,
        },
        descripcion: {
          type: String,
          required: true,
        },
        observaciones: [
          {
            type: String,
          },
        ],

        // creadoPor: {
        //   type: Schema.Types.ObjectId,
        //   ref: UserModel,
        //   required: true,
        // },
});

export default model("Avance", avanceSchema )
