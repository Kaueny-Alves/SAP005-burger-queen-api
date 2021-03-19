// const User = require("../models/UserModel");

// const Users = {
//   getAll(req, res) {
//     User.findAll()
//       .then((result) => {
//         res.json(result);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   },

//   userCreate(req, res) {
//     const { name, email, password, role } = req.body;
//     User.create(name, email, password, role)
//       .then((result) => {
//         res.status(200).json(result);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   },
// };

// module.exports = Users;
