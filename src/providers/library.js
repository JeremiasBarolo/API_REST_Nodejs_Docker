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

// Update
const updateLibrary = async (id, updatedData) => {
  try {
    const libraryToUpdate = await libraryModel.findByPk(id);
    if (!libraryToUpdate) {
      throw new Error(`Library with id ${id} not found`);
    }
    
    const updatedLibrary = await libraryToUpdate.update(updatedData);
    return updatedLibrary;
  } catch (err) {
    console.error("Error when updating Library", err);
    throw err;
  }
};

// Delete
const deleteLibrary = async (id) => {
  try {
    const deletedLibraryCount = await libraryModel.destroy({ where: { id } });
    if (deletedLibraryCount === 0) {
      throw new Error(`Library with id ${id} not found`);
    }
    return deletedLibraryCount;
  } catch (err) {
    console.error("Error when deleting Library", err);
    throw err;
  }
};

// Return All Libreries
const getAllLibraries = async () => {
  try {
    const allFetchedLibrary = await libraryModel.findAll(
      {
        include: 'book', 
      }
    );
    return allFetchedLibrary;
  } catch (err) {
    console.error("Error when getting All Libraries", err);
    throw err;
  }
};


module.exports = { createLibrary , getLibrary, updateLibrary, deleteLibrary, getAllLibraries}