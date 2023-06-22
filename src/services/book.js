const express = require('express')
const { bookProvider } = require('../providers')

// Services dedicado a: CRUD Book.

//  Create
const createBook = async (body) => {
    return await bookProvider.createBook(body)
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

module.exports = { createBook, getBook, updateBook, deleteBook }