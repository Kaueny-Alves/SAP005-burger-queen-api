// aqui vai o código que acessa o banco de dados
const User = require("../models/UserModel");

const UserController = {
  getAllUsers(req, res) {
    User.findAll()
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  getUserId(req, res) {
    console.log("Get Users Id =)");
    res.send("Request feita");
  },

  postUsers(req, res) {
    const { name, email, password, role } = req.body;
    User.create({ name, email, password, role })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  putUsers(req, res) {
    console.log("Put Usersr =)");
    res.send("Request feita");
  },

  deleteUsers(req, res) {
    console.log("Delete Users =)");
    res.send("Request feita");
  },
};
module.exports = UserController;
