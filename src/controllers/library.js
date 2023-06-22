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
const updateLibrary = async (req,res) => {
    try{
        const newUpdatedLibrary = await libraryService.updateLibrary(req.params.Id, req.body)
        res.json(newUpdatedLibrary)
        return(newUpdatedLibrary)
    }catch(error){
        res.status(400).json({ messege: error.message})
    }
}


// Borrar Libreria
const deleteLibrary = async (req,res) => {
    try{
        const deletedLibrary =  await libraryService.deleteLibrary(req.params.Id)
        res.json({"deleted": req.params.Id })
        return(deletedLibrary)
    }catch(error){
        res.status(400).json({ messege: error.message})
    }
}


// Traer todas las Librerias
const getAllLibraries = async(req, res) => {
    try{
        const allRequestedLibrary = await libraryService.getAllLibraries()
        res.json(allRequestedLibrary)
        return(allRequestedLibrary)
    }catch(error){
        res.status(400).json({ messege: error.message})
    }
}

module.exports = { createLibrary, getLibrary, updateLibrary ,deleteLibrary,getAllLibraries}