const { libraryService } = require('../services')
const express = require('express')

//Controladores de Library

// Crear Libreria
const createLibrary = (req, res) => {
    try{
        newLibrary = libraryService.createLibrary(req.params.newName)
        res.json({"name" : req.params.newName })
        return(newLibrary)
    }catch(error){
        console.error('Could not create the new library', error)
    }
}

// Traer Libreria
const getLibrary = (req) => {
    try{
        newLibrary = libraryService.getLibrary(req.params.Id, req.params.name)
        return(newLibrary)
    }catch(error){
        console.error('Could not create the new library', error)
    }
}

// Actualizar Libreria
const updateLibrary = (req) => {
    try{
        newLibrary = libraryService.updateLibrary(req.params.Id, req.params.updatedName)
        return(newLibrary)
    }catch(error){
        console.error('Could not create the new library', error)
    }
}

// Borrar Libreria
const deleteLibrary = (req) => {
    try{
        newLibrary = libraryService.deleteLibrary(req.params.Id, req.params.name)
        return(newLibrary)
    }catch(error){
        console.error('Could not create the new library', error)
    }
}

module.exports = { createLibrary, getLibrary, updateLibrary ,deleteLibrary}