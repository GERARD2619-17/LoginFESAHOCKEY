const express = require ('express');
const LoginController = require ('../controllers/LoginController');

const router = express.Router ();  


router.get ('/login', LoginController.login);
router.get ('/regiter', LoginController.register);

module.exports = router;