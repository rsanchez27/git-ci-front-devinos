/*mongo "mongodb+srv://cluster0.fc3em.mongodb.net/ProWD" --username Admin
clave 12345*/

/*Hu 01 Registro de usuario*/
db.usuarios.insert({
    "correo": "Roberto03@gmail.com",
    "docid": "24224237",
    "nombre": "Roberto Carlos",
    "contraseña": "16785",
    "tipo": ObjectId("6195616611bb77ed260188ad"),
    "estado": ObjectId("6195627811bb77ed260188b2")
})

/*Hu 02 Autenticar usuario*/
db.estadoUsuario.findOne({"_id": db.usuarios.findOne({
    $and: [
        {"correo": "margarito@gmail.com"},
        {"contraseña": "13565"}
    ]
}).estado}).name

/*Hu 03 Actualizar informacion usuario
#Cargar informacion */
db.usuarios.find({"_id":ObjectId("6195640c11bb77ed260188c4")})

/*#actualizar informacion*/
db.usuarios.update(
    {"_id":ObjectId("6195640c11bb77ed260188c4")},
    {
        $set: {
           "docid" : "13224567", 
           "nombre" : "Manuel Mejia",
           "contraseña" : "12346",
        }
    }
)

/*Hu 04 Ver usuarios*/
db.usuarios.find()

/*Hu 05 Autorizar usuarios 11 autorizar estudiante*/
db.usuarios.update(
    {"_id":ObjectId("6195640c11bb77ed260188c4")},
    {
        $set: {"estado" : ObjectId("619562b011bb77ed260188b4")}
    }
)

/*Hu 06 ver lista de proyectos admin 17 lista proyectos lider 19 listar proyectos estudiante*/
db.proyectos.find()

/*Hu 07 aprobar proyecto 08 activar o inactivar*/
db.proyectos.update(
    {"_id":ObjectId("6195850611bb77ed260188e2")},
    {
        $set: {"estado" : ObjectId("619562f311bb77ed260188b8")}
    }
)

/*Hu 09 Cambiar fase de proyecto*/
db.proyectos.update(
    {"_id":ObjectId("6195850611bb77ed260188e2")},
    {
        $set: {"fase" : ObjectId("6195633511bb77ed260188bc")}
    }
)

/*Hu 10 lista de estudiantes*/
db.usuarios.find({"tipo":ObjectId("6195616611bb77ed260188ad")})


/*Hu 11 cambiar estado de estudiante de Pendiente a AUtorizado*/

/*Hu 12 Nuevo proyecto*/
db.proyectos.insert({
    "nombre": "Analisis de los colores",
    "objetivog": "Estudiar los colores",
    "objetivose": ["pintar una casa", "Pintar un arbol"],
    "presupuesto": 12000,
    "fechainicio": "12-18-2019",
    "fechafinal": "1-12-2021",
    "nombrelider": "Margarito Fabian",
    "idlider": "4599792",
    "estado": ObjectId("619562f311bb77ed260188b8"),
    "fase": ObjectId("6195633511bb77ed260188bc")
})

/*Hu 13 Proyectos liderados*/
db.proyectos.find({"idlider": "4599792"})

/*Hu 14 Actualizar datos de proyecto*/
db.proyectos.update(
    {"_id":ObjectId("619b1f995ef616f2cce7ed75")},
    {
        $set: {
            "nombre": "Analisis del color",
            "objetivog": "Estudiar los colores",
            "objetivose": ["pintar una casa", "Pintar un arbol"],
            "presupuesto": 12000,
        }
    }
)

/*Hu 15 listar solicitudes de estudiantes*/
db.inscripciones.find()


/*Hu 16 aceptar solicitud*/
db.inscripciones.update(
    {"_id":ObjectId("61958ede11bb77ed260188e7")},
    {
        $set: {"estado" : ObjectId("6195639011bb77ed260188c1")}
    }
)

/*Hu 17 lista avances proyectos */
db.avances.find()


/*Hu 18 Registrar observaciones*/
db.avances.update(
    {"_id":ObjectId("619590d311bb77ed260188ea")},
    {
        $set: {"observaciones" : ["Excelente trabajo"]}
    }
)

/*Hu 19 como estudiante listas proyectos registrados en la plataforma*/
db.proyectos.find()

/*Hu 20 Generar solicitud a proyecto*/
db.inscripciones.insert({
    "idproyecto": ObjectId("6195850611bb77ed260188e2"),
    "idestudiante": "24224237",
    "estado": ObjectId("6195639011bb77ed260188c1"),
    "fechaingreso": "3-1-2020",
    "fechaegreso": "3-1-2021"
})


/*Hu 21 Listar proyectos inscritos*/
db.avances.find(
    {"idproyecto":db.inscripciones.findOne({
    $and: [
        {"idestudiante": "13224567"},
        {"estado": ObjectId("6195637d11bb77ed260188c0")}
    ]}).idproyecto})


/*Hu 22 Registrar avances*/
db.avances.insert({
    "idproyecto": ObjectId("6195850611bb77ed260188e2"),
    "fecha": "5-14-2020",
    "descripcion": "se analizan datos",
    "observaciones": []
})

/*Hu 23 actualizar registro de avance*/
db.avances.update(
    {"_id":ObjectId("619590d311bb77ed260188ea")},
    {
        $set: {"descripcion": "se analizan datos."}
    }
)