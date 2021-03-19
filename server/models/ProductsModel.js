const { DataTypes } = require("sequelize");

const db = require("../db/index");

const Products = db.define("products", {});

const init = async () => {
  await Products.sync();
};
init();

module.exports = { Products };
