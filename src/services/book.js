const express = require('express')
const { bookProvider } = require('../providers')

// Services dedicado a: CRUD Book.
// Aunque dentro de este proyecto no apliquemos el patron de diseño "Service",
// lo incluimos por si en un futuro se necesita aplicar logica de negocio a esta parte. 

//  Create
const createBook = async (id,content) => {
    return await bookProvider.createBook(id,content)
}

//  Read
const getBook = async (id) => {
    return await bookProvider.getBook(id)
}

//  Update
const updateBook = async (id, body) => {
    return await bookProvider.updateBook(id,body)
}

//  Delete
const deleteBook = async (id) => {
    return await bookProvider.deleteBook(id)
}

//  Read all
const getAllBooks = async () => {
    return await bookProvider.getAllBooks()
}
module.exports = { createBook, getBook, updateBook, deleteBook, getAllBooks }