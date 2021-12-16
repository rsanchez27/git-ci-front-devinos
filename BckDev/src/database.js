import mongoose from "mongoose";


const conectarBD = async () => {
  return await mongoose
    .connect("mongodb+srv://Admin:12345@cluster0.fc3em.mongodb.net/ProWD?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log('Conexion exitosa');
    })
    .catch((e) => {
      console.error('Error conectando a la bd', e);
    });
};

export default conectarBD;