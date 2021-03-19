const { DataTypes } = require("sequelize");

const db = require("../db/index");

const User = db.define("users", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.STRING,
});

const init = async () => {
  await User.sync();
};
init();

module.exports = { User };
