
// Librerias
// Crear librería (AUTH) (Parcialmente terminado)
// Obtener una librería (Termiando)
// Debe traer también todos los libros (Termiando) 
// Obtener todas las librerías (Termiando)
// Debe traer también todos los libros (Termiando)
// Modificar una librería (AUTH) (Parcialmente termiando)
// Eliminar una librería (**) (AUTH) (Parcialmente termiando)
// Agregar un libro nuevo (*) (AUTH) (Parcialmente termiando)

// Libro
// Crear libro (*) (AUTH)
// Obtener un libro en particular
// Obtener todos los libros
// Modificar un libro (AUTH)
// Eliminar un libro (**) (AUTH)


// Requires
const express = require("express")
const { libraryRouter, bookRouter } = require('./routes')
const { initializeDB } = require("./config/db-config")


// Creacion de app y puerto
const PORT = 8090
const app = express();

// Aplication Middlewares
app.use(express.json()) // Trasforma todo los datos a formato JSON


// Routes
app.use("/library", libraryRouter)

app.use("/book", bookRouter)

app.listen(PORT, 
    async () => {
        await initializeDB(); // Inicio de la Base de Datos
        console.log(`Server running in ${PORT}`);})