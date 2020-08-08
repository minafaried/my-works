const express = require('express')
const logoutController = require("../controllers/logout")
const router = express.Router();
router.use('/logout', logoutController.logout)

module.exports = router