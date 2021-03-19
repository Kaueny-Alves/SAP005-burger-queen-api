const { Router } = require("express");
const UserController = require("../controller/UserController");

const router = Router();

// aqui vai as requisições
router.get("/", UserController.getAllUsers);
router.get("/:uid", UserController.getUserId);
router.post("/", UserController.postUsers);
router.put("/:uid", UserController.putUsers);
router.delete("/:uid", UserController.deleteUsers);

module.exports = router;
