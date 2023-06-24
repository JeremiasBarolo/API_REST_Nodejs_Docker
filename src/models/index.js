// Aca van a estar alojados los exports de Models

const userModel = require('./user') 
const libraryModel = require('./library')
const bookModel = require('./book')

module.exports = { bookModel, libraryModel, userModel }