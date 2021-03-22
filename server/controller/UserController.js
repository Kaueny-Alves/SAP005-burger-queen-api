const User = require("../models/UserModel");

const UserController = {
  async getAllUsers(req, res) {
    try {
      const users = await User.findAll();
      res.status(200).send(users);
    } catch (error) {
      console.log(error);
    }
  },

  async getUserId(req, res) {
    try {
      const id = req.params;
      const user = await User.findOne({
        where: id,
      });
      res.status(200).send(user);
    } catch (error) {
      console.log(error);
      res.status(400).send("deu ruim");
    }
  },

  async postUsers(req, res) {
    try {
      const { name, email, password, role } = req.body;
      const user = await User.create({ name, email, password, role });
      res.status(200).send(user);
    } catch (error) {
      console.log(error);
    }
  },

  async putUsers(req, res) {
    try {
      const { name, email, password, role } = req.body;
      const id = req.params;
      await User.update(
        { name, email, password, role },
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

  async deleteUsers(req, res) {
    try {
      const id = req.params;
      await User.destroy({
        where: id,
      });
      res.status(200).send("usuário deletado");
    } catch (error) {
      console.log(error);
      res.status(400).send("deu ruim");
    }
  },
};
module.exports = UserController;
