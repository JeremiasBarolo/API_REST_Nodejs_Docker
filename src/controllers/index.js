// Aca van a estar alojados los exports de controllers
const userController = require('./user')

const bookController = require('./book')

const libraryController = require('./library')

module.exports = { libraryController , bookController, userController }