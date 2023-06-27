const { userModel } = require('../models')

// Create
const createUser = async (content) => {
    try {
     // Creamos el modelo de usuario usando content y lo devolvemos
      const newUser = await userModel.create(content); 
      return newUser
    } catch (err) {
      console.error("Error when creating User", err);
      throw err;
    }
};

// Read
const getUser = async (id) => {
  try {
  //  traemos el usuario con el id
    const readUser = await userModel.findByPk(id); 
    return readUser
  } catch (err) {
    console.error("Error when getting User", err);
    throw err;
  }
};

// Update
const updateUser = async (id,content) => {
  try {
   // Buscamos el usuario con el id y lo actualizamos con el contenido
    userFound = await userModel.findByPk(id);
    const NewUpdatedUser = await userFound.update(content); 
    return NewUpdatedUser
  } catch (err) {
    console.error("Error when updating User", err);
    throw err;
  }
};

// DELETE
const deleteUser = async (id) => {
  try {
   // Buscamos el usuario con el id y lo borramos
    const deletedUser = await userModel.destroy({ where: { id } });
    return deletedUser
  } catch (err) {
    console.error("Error when Deleting User", err);
    throw err;
  }
};

// All Users
const getAllUsers = async () => {
  try {
    // traemos todos los usuarios
    const allUsers = await userModel.findAll();
    return allUsers
  } catch (err) {
    console.error("Error when fetching User", err);
    throw err;
  }
};

module.exports = {createUser, getAllUsers, getUser, updateUser, deleteUser }