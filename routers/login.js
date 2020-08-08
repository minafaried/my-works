const express = require('express')
const loginController = require("../controllers/login")
const router = express.Router();
router.get('/login', loginController.loginpage);
router.post('/login', loginController.login)

module.exports = router