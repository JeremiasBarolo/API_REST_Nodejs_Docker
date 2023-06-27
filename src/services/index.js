// Aca van a estar alojados los exports de Services
const userService = require('./user')

const bookService = require('./book')

const libraryService = require('./library')

module.exports = { libraryService, bookService, userService }