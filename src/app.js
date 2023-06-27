// Nuevas features:
// Middleware de validacion de usuarios (Hecho)
// Full CRUD de Users (Hecho)
// Error handlers
// Crear base de datos en conteiner



// Requires
const express = require("express")
const { libraryRouter, bookRouter ,loginRouter } = require('./routes')
const { initializeDB } = require("./config/db-config")


// Creacion de app y puerto
const PORT = 8090
const app = express();

// Aplication Middlewares
app.use(express.json()) // Trasforma todo los datos a formato JSON


// Routes
app.use("/library", libraryRouter)

app.use("/book", bookRouter)

app.use("/user", loginRouter)

app.listen(PORT, 
    async () => {
        await initializeDB(); // Inicio de la Base de Datos
        console.log(`Server running in ${PORT}`);})

