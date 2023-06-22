const { libraryService } = require('../services')
const express = require('express')

//Controladores de Library

// Crear Libreria
const createLibrary = async (req, res) => {
    try{
        newLibrary = await libraryService.createLibrary(req.body)
        res.json(newLibrary)
    }catch(error){
        res.status(400).json({ messege: error.message})
    }
}

// Traer Libreria
const getLibrary = async(req, res) => {
    try{
        requestedLibrary = await libraryService.getLibrary(req.params.Id)
        res.json(requestedLibrary)
        return(requestedLibrary)
    }catch(error){
        res.status(400).json({ messege: error.message})
    }
}

// Actualizar Libreria
const updateLibrary = async (req) => {
    try{
        newLibrary = await libraryService.updateLibrary(req.params.Id, req.params.updatedName)
        return(newLibrary)
    }catch(error){
        res.status(400).json({ messege: error.message})
    }
}

// Borrar Libreria
const deleteLibrary = async (req) => {
    try{
        newLibrary =  await libraryService.deleteLibrary(req.params.Id, req.params.name)
        return(newLibrary)
    }catch(error){
        res.status(400).json({ messege: error.message})
    }
}

module.exports = { createLibrary, getLibrary, updateLibrary ,deleteLibrary}