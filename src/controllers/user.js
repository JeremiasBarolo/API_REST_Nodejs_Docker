const {userService} = require('../services')


// Crear user
const createUser = async (req, res) => {
    try{
        const newUser = await userService.createUser(req.body)
        res.json(newUser)
    }catch(error){
        res.status(400).json({ messege: error.message})
    }
}

// Read user
const getUser = async (req, res) => {
    try{
        const fetchedUser = await userService.getUser(req.params.IdUser)
        res.json(fetchedUser)
    }catch(error){
        res.status(400).json({ messege: error.message})
    }
}


// Update user
const updateUser = async (req, res) => {
    try{
        const updatedUser = await userService.updateUser(req.params.IdUser , req.body)
        res.json(updatedUser)
    }catch(error){
        res.status(400).json({ messege: error.message})
    }
}


// Delete user
const deleteUser = async (req, res) => {
    try{
        const deletedUser = await userService.deleteUser(req.params.IdUser)
        res.json(deletedUser)
    }catch(error){
        res.status(400).json({ messege: error.message})
    }
}



// Traer todos los users
const getAllUsers = async(req, res) => {
    try{
        const allUsers = await userService.getAllUsers()
        res.json(allUsers)
        return(allUsers)
    }catch(error){
        res.status(400).json({ messege: error.message})
    }
}

module.exports = { getAllUsers, createUser, getUser, updateUser, deleteUser }