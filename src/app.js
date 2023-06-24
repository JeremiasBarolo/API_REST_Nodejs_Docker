
// Librerias
// Crear librería (AUTH) (Termiando)
// Obtener una librería (Termiando)
// Debe traer también todos los libros (Termiando) 
// Obtener todas las librerías (Termiando)
// Debe traer también todos los libros (Termiando)
// Modificar una librería (AUTH) (Termiando)
// Eliminar una librería (**) (AUTH) (Termiando)
// Agregar un libro nuevo (*) (AUTH) (Termiando) (Al crearse el libro se debera asignar a que libreria pertenecera)

// Libro
// Crear libro (*) (AUTH) (Termiando)
// Obtener un libro en particular (Termiando)
// Obtener todos los libros (Termiando)
// Modificar un libro (AUTH) (Termiando)
// Eliminar un libro (**) (AUTH) (Termiando)

// User
// Crear usuario (Terminado)
// Obtener todos los usuarios (AUTH) (Terminado) (una opcion personal)


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

