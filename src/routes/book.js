const express = require("express")
const { bookController } = require("../controllers")
const router = express.Router()


// Create Book
router.post('/create/:IdLibreria', bookController.createBook)

// Request Book 
router.get('/:Id', bookController.getBook)

// Update Book
router.put('/:Id', bookController.updateBook)

// Delete Book
router.delete('/:Id', bookController.deleteBook)




module.exports = router