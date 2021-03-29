const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserId);
router.post('/', UserController.postUsers);
router.put('/:id', UserController.putUsers);
router.delete('/:id', UserController.deleteUsers);

module.exports = router;
