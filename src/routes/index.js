// Aca van a estar alojados los exports de Routes
const loginRouter = require('./login')

const bookRouter = require('./book')

const libraryRouter = require('./library')

module.exports = { libraryRouter, bookRouter, loginRouter }