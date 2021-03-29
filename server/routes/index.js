const { Router } = require('express');
const Users = require('./UsersRouter');
const Products = require('./ProductsRouter');
const Orders = require('./OrdersRouter');

const router = Router();

router.use('/users', Users);
router.use('/products', Products);
router.use('/orders', Orders);

module.exports = router;
