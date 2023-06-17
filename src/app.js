// Requires
const express = require("express")
const { libraryRouter } = require('./routes')
const { initializeDB } = require("./config/db-config")


// Creacion de app y puerto
const PORT = 8090
const app = express();

// Aplication Middlewares
app.use(express.json()) // Trasforma todo los datos a formato JSON


// Routes
app.use("/library", libraryRouter)

app.listen(PORT, 
    async () => {
        await initializeDB(); // Inicio de la Base de Datos
        console.log(`Server running in ${PORT}`);})