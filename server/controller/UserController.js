// aqui vai o código que acessa o banco de dados

const getAllUsers = (req, res) => {
  console.log("Get Users =)");
  res.send("Request User feita");
};
const getUserId = (req, res) => {
  console.log("Get Users Id =)");
  res.send("Request feita");
};

const postUsers = (req, res) => {
  console.log("Post Users =)");
  res.send("Request feita");
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
