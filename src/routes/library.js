const express = require("express")
const { libraryController } = require("../controllers")
const router = express.Router()


// Create Library
router.post('/create', libraryController.createLibrary)

// Request Library 
router.get('/:Id', libraryController.getLibrary)

// Update Library
router.put('/:Id', libraryController.updateLibrary)

// Delete Library
router.delete('/:Id', libraryController.deleteLibrary)




module.exports = router