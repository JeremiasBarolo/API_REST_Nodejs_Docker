// Aca van a estar alojados los exports de Services
const loginService = require('./login')

const bookService = require('./book')

const libraryService = require('./library')

module.exports = { libraryService, bookService, loginService }