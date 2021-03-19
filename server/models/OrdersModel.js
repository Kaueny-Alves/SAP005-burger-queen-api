const { DataTypes } = require("sequelize");

const db = require("../db/index");

const Order = db.define("orders", {});

const init = async () => {
  await Order.sync();
};
init();

module.exports = { Order };
