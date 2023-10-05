const express = require('express');
const LoginController = require('../controllers/LoginController');

const router = express.Router();

router.get('/login', LoginController.index);
router.get('/register', LoginController.register);
router.post('/register', LoginController.storeUser);
router.post('/register', LoginController.auth);






module.exports = router;