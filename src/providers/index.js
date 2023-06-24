// Aca van a estar alojados los exports de Providers
const bookProvider = require('./book')

const libraryProvider = require('./library')

const userProvider = require("./user")

module.exports = { libraryProvider, bookProvider, userProvider }