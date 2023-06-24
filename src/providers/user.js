const { userModel } = require('../models')

// Create
const createUser = async (content) => {
    try {
     // Creamos el modelo de usuario usando content y lo devolvemos
      const newUser = await userModel.create(content); 
      return newUser
    } catch (err) {
      console.error("Error when creating book", err);
      throw err;
    }
};

// All Users
const getAllUsers = async () => {
  try {
   // Creamos el modelo de usuario usando content y lo devolvemos
    const allUsers = await userModel.findAll();
    return allUsers
  } catch (err) {
    console.error("Error when fetchin users", err);
    throw err;
  }
};

module.exports = {createUser, getAllUsers }