const express = require("express")
const { libraryController } = require("../controllers")
const router = express.Router()


// Create Library
router.post('/create/:newName', libraryController.createLibrary)

// Request Library 
router.get('/request/:Id/:name', libraryController.getLibrary)

// Update Library
router.put('/update/:Id/:updatedName', libraryController.updateLibrary)

// Delete Library
router.delete('/update/:Id/:name', libraryController.deleteLibrary)




module.exports = router