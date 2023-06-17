const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

const Book = sequelize.define("Book", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
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
    allowNull: false,
    unique: true,
  },
  libraryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  }
});



module.exports = Book;
