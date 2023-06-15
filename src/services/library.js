const express = require('express')
// Services dedicado a: CRUD librerias.

//  Create
const createLibrary = (name) => {
    return console.log(`We created a new library called: ${name}`)
}

//  Request
const getLibrary = (id, name) => {
    return console.log(`Here's the library ${name}, with the id: ${id}`)
}

//  Update
const updateLibrary = (id, name) => {
    return console.log(`We updated the library ${name}, with the id: ${id}`)
}

//  Delete
const deleteLibrary = (id, name) => {
    return console.log(`We deleted the library ${name}, with the id: ${id}`)
}

module.exports = { createLibrary, getLibrary, updateLibrary, deleteLibrary }