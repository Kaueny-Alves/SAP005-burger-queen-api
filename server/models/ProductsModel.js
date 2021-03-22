const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const Products = sequelize.define("products", {
  name: DataTypes.STRING,
  price: DataTypes.INTEGER,
  flavor: DataTypes.STRING,
  complement: DataTypes.STRING,
  image: DataTypes.STRING,
  sub_type: DataTypes.STRING,
  type: DataTypes.STRING,
});

const init = async () => {
  await Products.sync();
};
//init();

module.exports =  Products ;
