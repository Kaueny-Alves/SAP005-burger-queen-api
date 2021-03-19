// aqui vai o código que acessa o banco de dados

const getAllProducts = (req, res) => {
  console.log("Get Products =)");
  res.send("Request Product feita");
};

const getProductId = (req, res) => {
  console.log("Get Products Id =)");
  res.send("Request feita");
};

const postProducts = (req, res) => {
  console.log("Post Products =)");
  res.send("Request feita");
};

const putProducts = (req, res) => {
  console.log("Put Products =)");
  res.send("Request feita");
};

const deleteProducts = (req, res) => {
  console.log("Delete Products =)");
  res.send("Request feita");
};

module.exports = {
  getAllProducts,
  getProductId,
  postProducts,
  putProducts,
  deleteProducts,
};
