const { Router } = require('express');
const ProductsController = require('../controllers/ProductsController');

const router = Router();

// aqui vai as requisições
router.get('/', ProductsController.getAllProducts);
router.get('/:id', ProductsController.getProductId);
router.post('/', ProductsController.postProducts);
router.put('/:id', ProductsController.putProducts);
router.delete('/:id', ProductsController.deleteProducts);

module.exports = router;
