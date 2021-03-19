const { Router } = require("express");
const ProductsController = require("../controller/ProductsController");

const router = Router();

// aqui vai as requisições
router.get("/", ProductsController.getAllProducts);
router.get("/:productId", ProductsController.getProductId);
router.post("/", ProductsController.postProducts);
router.put("/:productId", ProductsController.putProducts);
router.delete("/:productId", ProductsController.deleteProducts);

module.exports = router;
