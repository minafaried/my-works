const express = require('express')
const projects = require('../models/project')
const homeController = require("../controllers/home");
const { JSON } = require('mysql2/lib/constants/types');
const { json } = require('body-parser');
const router = express.Router();
router.get('/', homeController.home)
router.get('/home', homeController.home)
router.use('/test', (req, res, next) => {
    projects.getProjects()
        .then(([rows]) => {
            res.send(rows);
        }).catch(err => console.log(err))

})
module.exports = router