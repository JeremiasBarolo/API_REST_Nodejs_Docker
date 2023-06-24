const userProvider = require('../providers/user')


// Crear user
const createUser = async (req, res) => {
    try{
        // Directamente conectamos con el provider, ya que no aplicaremos logica de negocios.
        newUser = await userProvider.createUser(req.body)
        res.json(newUser)
    }catch(error){
        res.status(400).json({ messege: error.message})
    }
}


// Traer todos los users
const getAllUsers = async(req, res) => {
    try{
        // Directamente conectamos con el provider, ya que no aplicaremos logica de negocios.
        allUsers = await userProvider.getAllUsers()
        res.json(allUsers)
        return(allUsers)
    }catch(error){
        res.status(400).json({ messege: error.message})
    }
}

module.exports = { getAllUsers, createUser }