const express = require('express');
const router = express.Router();
const userController = require("../controllers/user")

router.post('/', userController.register);
router.delete('/:token', userController.withdraw);
// router.patch('/', userController.update);
router.post('/login', userController.login);
router.get('/:token', userController.userinfo);

module.exports = router;