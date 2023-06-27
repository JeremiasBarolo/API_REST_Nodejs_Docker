const express =  require("express");
const jwt = require("jsonwebtoken");
const { SECRET } = require('../middlewares/auth');
const { userProvider } = require("../providers");
const { userModel } = require("../models");


//  Create
const createUser = async (content) => {
    return await userProvider.createUser(content)
}

//  Read
const getUser = async (id) => {
    return await userProvider.getUser(id)
}

//  Update
const updateUser = async (id, content) => {
    return await userProvider.updateUser(id,content)
}

//  Delete
const deleteUser = async (id) => {
    return await userProvider.deleteUser(id)
}

//  Read all
const getAllUsers = async () => {
    return await userProvider.getAllUsers()
}

// Login
const login = async (req, res)=> {
    const { username, password } = req.body;

    // Verificacion de si el usuario Existe dentro de la base de datos
    const userFound = await userModel.findOne({
        where: { username, password },
      });

    // Verificacion de credenciales
    if (username === 'admin' && password === 'admin' || userFound ) {
        const token = jwt.sign({username}, SECRET);
        res.json({token})
    }else{
        res.status(401).json({messege: 'failed authentication'})
    }
}

module.exports = {login , createUser, getUser, updateUser, deleteUser, getAllUsers}
