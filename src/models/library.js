const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");
const Book = require("./book");

const Library = sequelize.define("Library", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  }
});

Library.hasMany(Book, { as: 'book' , onDelete: 'CASCADE' });



module.exports = Library;
