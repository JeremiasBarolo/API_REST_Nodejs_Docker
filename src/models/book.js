const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");
const Library =  require('./library.js')

const Book = sequelize.define("Book", {
  isbn: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});




module.exports = Book;
