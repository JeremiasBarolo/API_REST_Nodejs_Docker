const express = require("express")
const router = express.Router()
const {loginService} = require("../services")

// Login
router.post('/', loginService.login)


module.exports = router