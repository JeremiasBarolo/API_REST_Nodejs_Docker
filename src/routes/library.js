const express = require("express")
const { libraryRouter } = require(".")
const router = express.Router()


// CRUD library

// Create Library
router.post('/create')

// Request Library 
router.get('/request/:Id')

// Update Library
router.put('/update/:Id')

// Delete Library
router.delete('/update/:Id')




module.exports = router