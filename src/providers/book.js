const { bookModel, libraryModel} = require('../models')

// Create
const createBook = async (id, content) => {
    try {
      //Creamos el modelo usando el contenido del json
      const newBook = await bookModel.create(
        {libraryId: id,
        ...content}); 

      //Buscamos la biblioteca con el id que le pasamos
      const selectedLibrary = await libraryModel.findByPk(id); 

      //Agregamos el libro a la biblioteca
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
    // Buscamos el libro con el id que le pasamos y lo devolvemos
    const fetchedBook = await bookModel.findByPk(id, { include: { all: true } });
    return fetchedBook;

  } catch (err) {
    console.error("Error when getting book", err);
    throw err;
  }
};


// Update
const updateBook = async (id, updatedData) => {
  try {
    // Buscamos el libro con el id que le pasamos
    const bookToUpdate = await bookModel.findByPk(id);

    // Si no lo encuentra lanzamos un error
    if (!bookToUpdate) {
      throw new Error(`book with id ${id} not found`);
    }
    
    // Si lo encuentra lo actualizamos
    const updatedBook = await bookToUpdate.update(updatedData);
    return updatedBook;

  } catch (err) {
    console.error("Error when updating book", err);
    throw err;
  }
};


// Delete
const deleteBook = async (id) => {
  try {
    // Buscamos el libro con el id que le pasamos 
    const deletedBookCount = await bookModel.destroy({ where: { id } });
    return deletedBookCount;

  } catch (err) {
    console.error("Error when deleting book", err);
    throw err;
    }
}


// Return All Books
const getAllBooks = async () => {
  try {

    // Buscamos todos los libros y los devolvemos
    const allFetchedBooks = await bookModel.findAll();
    return allFetchedBooks;


  } catch (err) {
    console.error("Error when getting All books", err);
    throw err;
  }
};
module.exports = { createBook , getBook, updateBook, deleteBook, getAllBooks }