const { bookService } = require('../services')
const express = require('express')

//Controladores de Book

// Crear Libreria
const createBook = async (req, res) => {
    try{
        newBook = await bookService.createBook(req.params.IdLibreria,req.body)
        res.json(newBook)
    }catch(error){
        res.status(400).json({ messege: error.message})
    }
}

// Traer Libreria
const getBook = async(req, res) => {
    try{
        requestedBook = await bookService.getBook(req.params.Id)
        res.json(requestedBook)
        return(requestedBook)
    }catch(error){
        res.status(400).json({ messege: error.message})
    }
}

// Actualizar Libreria
const updateBook = async (req,res) => {
    try{
        const newUpdatedBook = await bookService.updateBook(req.params.IdLibreria, req.body)
        res.json(newUpdatedBook)
        return(newUpdatedBook)
    }catch(error){
        res.status(400).json({ messege: error.message})
    }
}

// Borrar Libreria
const deleteBook = async (req,res) => {
    try{
        const deletedBook =  await bookService.deleteBook (req.params.Id)
        res.json({"deletedBookID": req.params.Id })
        return(deletedBook)
    }catch(error){
        res.status(400).json({ messege: error.message})
    }
}

module.exports = { createBook, getBook, updateBook , deleteBook}