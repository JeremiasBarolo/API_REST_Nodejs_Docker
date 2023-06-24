const express = require("express")
const router = express.Router()
const {userController} = require("../controllers")
const {loginService} = require("../services")
const { jwtValidMDW } = require("../middlewares/auth")


// Create user
router.post('/create', userController.createUser)

// Get all users
router.get('/', jwtValidMDW , userController.getAllUsers)

// Login
router.post('/login', loginService.login)


module.exports = router