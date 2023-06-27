const express =  require("express");
const jwt = require("jsonwebtoken");
const { SECRET } = require('../middlewares/auth');
const { userProvider } = require("../providers");


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
const login = (req, res)=> {
    const { user, password } = req.body;

    // Verificacion de credenciales de admin
    if (user === 'admin' && password === 'admin') {
        const token = jwt.sign({user}, SECRET);
        res.json({token})
    }else{
        res.status(401).json({messege: 'failed authentication'})
    }
}

module.exports = {login , createUser, getUser, updateUser, deleteUser, getAllUsers}
