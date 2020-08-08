const express = require('express')
const cvController = require("../controllers/cv")
const router = express.Router();
router.get('/cv', cvController.cv)

module.exports = router