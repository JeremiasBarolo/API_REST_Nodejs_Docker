
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
// Crear libro (*) (AUTH) (Parcialmente termiando)
// Obtener un libro en particular (Termiando)
// Obtener todos los libros (Termiando)
// Modificar un libro (AUTH) (Parcialmente termiando)
// Eliminar un libro (**) (AUTH) (Parcialmente termiando)


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

app.use("/login", loginRouter)

app.listen(PORT, 
    async () => {
        await initializeDB(); // Inicio de la Base de Datos
        console.log(`Server running in ${PORT}`);})

