// aqui vai o código que acessa o banco de dados
const Users = require("../db/UsersDb");

const getAllUsers = (req, res) => {
  Users.getAll(req, res);
  console.log("Get Users =)");
  res.send("Buscar todos usuários");
};
const getUserId = (req, res) => {
  console.log("Get Users Id =)");
  res.send("Request feita");
};

const postUsers = (req, res) => {
  Users.userCreate(req, res);
  console.log("Post Users =)");
  res.send("Usuário criado com sucesso");
};

const putUsers = (req, res) => {
  console.log("Put Usersr =)");
  res.send("Request feita");
};

const deleteUsers = (req, res) => {
  console.log("Delete Users =)");
  res.send("Request feita");
};

module.exports = { getAllUsers, getUserId, postUsers, putUsers, deleteUsers };
