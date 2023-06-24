const express = require("express")
const { bookController } = require("../controllers")
const router = express.Router()
const { jwtValidMDW } = require("../middlewares/auth")


// Create Book
router.post('/create/:IdLibreria', jwtValidMDW ,bookController.createBook)

// Request Book 
router.get('/:Id', bookController.getBook)

// Update Book
router.put('/:Id', jwtValidMDW , bookController.updateBook)

// Delete Book
router.delete('/:Id', jwtValidMDW , bookController.deleteBook)

// Traer todos los books 
router.get('/', bookController.getAllBooks)




module.exports = router