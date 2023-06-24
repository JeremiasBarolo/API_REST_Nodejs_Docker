const express = require('express')
const { libraryProvider } = require('../providers')

// Services dedicado a: CRUD librerias.
// Aunque dentro de este proyecto no apliquemos el patron de diseño "Service",
// lo incluimos por si en un futuro se necesita aplicar logica de negocio a esta parte. 

//  Create
const createLibrary = async (body) => {
    return await libraryProvider.createLibrary(body)
}

//  Read
const getLibrary = async (id) => {
    return await libraryProvider.getLibrary(id)
}

//  Update
const updateLibrary = async (id, body) => {
    return await libraryProvider.updateLibrary(id,body)
}

//  Delete
const deleteLibrary = async (id) => {
    return await libraryProvider.deleteLibrary(id)
}

//  Read all
const getAllLibraries = async () => {
    return await libraryProvider.getAllLibraries()
}

module.exports = { createLibrary, getLibrary, updateLibrary, deleteLibrary, getAllLibraries }