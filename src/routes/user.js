const express = require("express")
const router = express.Router()
const { userController } = require("../controllers")
const { userService } = require("../services")
const { jwtValidMDW } = require("../middlewares/auth")


// Create user
router.post('/create', userController.createUser)

// Read user
router.get('/:IdUser', userController.getUser)

// Update user
router.put('/:IdUser', jwtValidMDW , userController.updateUser)

// Delete user
router.delete('/:IdUser', jwtValidMDW, userController.deleteUser)

// Get all users
router.get('/' ,jwtValidMDW, userController.getAllUsers)

// Login
router.post('/login', userService.login)


module.exports = router