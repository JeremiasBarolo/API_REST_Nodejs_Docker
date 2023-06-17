const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database",
});

const initializeDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.query("SELECT 5+3  as result;");
    console.log("Conexión a la base de datos exitosa");
    await sequelize.sync({ force: false });
  } catch (error) {
    console.error("Hubo un error al inicializar la base de datos", error);
  }
};

module.exports = { sequelize, initializeDB };