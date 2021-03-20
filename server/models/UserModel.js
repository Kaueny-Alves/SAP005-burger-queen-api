const { DataTypes, Sequelize } = require("sequelize");

const sequelize = require("../db/index");

const User = sequelize.define("users", {
  //id: Sequelize.UUIDV4,
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.STRING,
});

const init = async () => {
  await User.sync();
};
//init();

module.exports = User;
