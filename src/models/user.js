const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");


const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
        isEmail: true
  },
    },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});




module.exports = User;