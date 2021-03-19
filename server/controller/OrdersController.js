// aqui vai o código que acessa o banco de dados

const getAllOrders = (req, res) => {
  console.log("Get Orders =)");
  res.send("Request Order feita");
};
const getOrderId = (req, res) => {
  console.log("Get Orders Id =)");
  res.send("Request  feita");
};

const postOrders = (req, res) => {
  console.log("Post Orders =)");
  res.send("Request feita");
};

const putOrders = (req, res) => {
  console.log("Put Orders =)");
  res.send("Request feita");
};

const deleteOrders = (req, res) => {
  console.log("delete Orders =)");
  res.send("Request feita");
};

module.exports = {
  getAllOrders,
  getOrderId,
  postOrders,
  putOrders,
  deleteOrders,
};
