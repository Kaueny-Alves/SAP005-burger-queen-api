const Products = require("../models/ProductsModel");

const ProductsController = {
  async getAllProducts(req, res) {
    try {
      const products = await Products.findAll();
      res.status(200).send(products);
    } catch (error) {
      console.log(error);
    }
  },

  async getProductId(req, res) {
    try {
      const id = req.params;
      const product = await Products.findOne({
        where: id,
      });
      res.status(200).send(product);
    } catch (error) {
      console.log(error);
      res.status(400).send("deu ruim");
    }
  },

  async postProducts(req, res) {
    try {
      const { name, price, flavor, complement, image,  sub_type, type } = req.body;
      const product = await Products.create({name, price, flavor, complement, image,  sub_type, type });
      res.status(200).send(product);
    } catch (error) {
      console.log(error);
    }
  },

  async putProducts(req, res) {
    try {
      const { name, price, flavor, complement, image,  sub_type, type } = req.body;

      const id = req.params;
      await Products.update(
        {name, price, flavor, complement, image,  sub_type, type },
        {
          where: id,
        }
      );
      res.status(200).send("dados alterados");
    } catch (error) {
      console.log(error);
      res.status(400).send("deu ruim");
    }
  },

  async deleteProducts(req, res) {
    try {
      const id = req.params;
      await Products.destroy({
        where: id,
      });
      res.status(200).send("produto deletado");
    } catch (error) {
      console.log(error);
      res.status(400).send("deu ruim");
    }

  },
};

module.exports = ProductsController;
