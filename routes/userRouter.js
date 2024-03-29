const userController = require('../controllers/userController');

const router = require('express').Router();

router.post('/Add', userController.addUser);
router.get('/Get', userController.getUsers);
router.delete('/Delete/:id', userController.deleteUser);
router.put('/Update/:id', userController.updateUser);
router.get('/GetByType/:typeId', userController.getUserByType);

module.exports = router;