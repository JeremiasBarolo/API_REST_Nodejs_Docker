const express = require("express")
const { libraryController } = require("../controllers")
const router = express.Router()
const { jwtValidMDW } = require("../middlewares/auth")

// Create Library
router.post('/create', jwtValidMDW , libraryController.createLibrary)

// Request Library 
router.get('/:Id', libraryController.getLibrary)

// Update Library
router.put('/:Id', libraryController.updateLibrary)

// Delete Library
router.delete('/:Id', libraryController.deleteLibrary)

// Get All Libraries 
router.get('/',libraryController.getAllLibraries)



module.exports = router