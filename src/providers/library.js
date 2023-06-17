const { libraryModel } = require('../models')

const createLibrary = async (library) => {
    try {
      const newLibrary = await libraryModel.create(library);
      return newLibrary;
    } catch (err) {
      console.error("Error when creating Library", err);
      throw err;
    }
  };

module.exports = { createLibrary }