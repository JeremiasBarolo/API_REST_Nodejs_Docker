// Requires
const express = require("express")
const { libraryRouter } = require('./routes')


// Creacion de app y puerto
const PORT = 8090
const app = express();

// Aplication Middlewares
app.use(express.json()) // Trasforma todo los datos a formato JSON


// Routes
app.use("/library", libraryRouter)

app.listen(PORT, 
    console.log(`server running at ${PORT}`))