const express = require("express")
const { libraryController } = require("../controllers")
const router = express.Router()


// Create Library
router.post('/create', libraryController.createLibrary)

// Request Library 
router.get('/request/:Id', libraryController.getLibrary)

// Update Library
router.put('/update/:Id', libraryController.updateLibrary)

// Delete Library
router.delete('/update/:Id', libraryController.deleteLibrary)




module.exports = router