const { bookModel } = require('../models')

// Create
const createBook = async (library) => {
    try {

    // logica 

    } catch (err) {
      console.error("Error when creating Library", err);
      throw err;
    }
};


// Read
const getBook = async (id) => {
  try {

// logica 

  } catch (err) {
    console.error("Error when getting Library", err);
    throw err;
  }
};

// Update
const updateBook = async (id, updatedData) => {
  try {

  // logica 

  } catch (err) {
    console.error("Error when updating Library", err);
    throw err;
  }
};

// Delete
const deleteBook = async (id) => {
  try {

    // logica 

  } catch (err) {
    console.error("Error when deleting Library", err);
    throw err;
    }
}
module.exports = { createBook , getBook, updateBook, deleteBook}