const { DataTypes } = require("sequelize");

const sequelize = require("../database/index");

const Order = sequelize.define("orders", {
  client: DataTypes.STRING,
  table: DataTypes.STRING,
  
});

const init = async () => {
  await Order.sync();
};
//init();


module.exports = Order;
