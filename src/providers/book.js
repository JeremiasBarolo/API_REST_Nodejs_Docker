const { bookModel, libraryModel} = require('../models')

// Create
const createBook = async (id, content) => {
    try {
      const newBook = await bookModel.create(content);
      const selectedLibrary = await libraryModel.findByPk(id);
      await selectedLibrary.addBook(newBook)
      return newBook
    } catch (err) {
      console.error("Error when creating book", err);
      throw err;
    }
};


// Read
const getBook = async (id) => {
  try {

// logica 

  } catch (err) {
    console.error("Error when getting book", err);
    throw err;
  }
};

// Update
const updateBook = async (id, updatedData) => {
  try {

  // logica 

  } catch (err) {
    console.error("Error when updating book", err);
    throw err;
  }
};

// Delete
const deleteBook = async (id) => {
  try {

    // logica 

  } catch (err) {
    console.error("Error when deleting book", err);
    throw err;
    }
}
module.exports = { createBook , getBook, updateBook, deleteBook}