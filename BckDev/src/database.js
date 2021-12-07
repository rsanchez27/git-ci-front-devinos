import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Admin:12345@cluster0.fc3em.mongodb.net/ProWD?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("La base de datos está conectada"))
    .catch(err => console.log(err));