const express =  require("express");
const jwt = require("jsonwebtoken");
const { SECRET } = require('../middlewares/auth')

const login = (req, res)=> {
    const { user, password } = req.body;

    // Verificacion de credenciales de usuario
    if (user === 'admin' && password === 'admin') {
        const token = jwt.sign({user}, SECRET);
        res.json({token})
    }else{
        res.status(401).json({messege: 'failed authentication'})
    }
}

module.exports = {login}
