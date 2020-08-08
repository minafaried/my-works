const express = require('express')
const addprojectcontroller = require("../controllers/addproject")
const router = express.Router();
router.get('/addproject', addprojectcontroller.returnaddprojectpage)
router.post('/addproject', addprojectcontroller.addproject)
module.exports = router