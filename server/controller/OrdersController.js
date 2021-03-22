const Order = require("../models/OrdersModel");

const OrdersController = {
  async getAllOrders(req, res) {
    try {
      const order = await Order.findAll();
      res.status(200).send(order);
      
    } catch (error) {
      console.log(error);
    }
  },

  async getOrderId(req, res) {
    console.log("Get Orders Id =)");
    res.send("Request  feita");
  },

  async postOrders(req, res) {
    console.log("Post Orders =)");
    res.send("Request feita");
  },

  async putOrders(req, res) {
    console.log("Put Orders =)");
    res.send("Request feita");
  },

  async deleteOrders(req, res) {
    console.log("delete Orders =)");
    res.send("Request feita");
  },
};
module.exports = OrdersController;
