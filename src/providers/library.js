const { libraryModel } = require('../models')

// Create
const createLibrary = async (library) => {
    try {
      const newLibrary = await libraryModel.create(library);
      return newLibrary;
    } catch (err) {
      console.error("Error when creating Library", err);
      throw err;
    }
};


// Read
const getLibrary = async (id) => {
  try {
    const fetchedLibrary = await libraryModel.findByPk(id, { include: { all: true } });
    return fetchedLibrary;
  } catch (err) {
    console.error("Error when getting Library", err);
    throw err;
  }
};

module.exports = { createLibrary , getLibrary}