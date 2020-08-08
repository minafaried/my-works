const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const session = require('express-session')
const home = require("./routers/home")
const cv = require("./routers/cv")
const addproject = require("./routers/addproject")
const login = require("./routers/login")
const logout = require("./routers/logout")
const app = express()
app.set('view engine', 'ejs');
app.set('views', 'views')
app.use(bodyparser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "css")))
app.use(express.static(path.join(__dirname, "images")))
app.use(express.static(path.join(__dirname, "views", "validation")))
app.use(session({
    secret: 'project key',
    resave: true,
    saveUninitialized: true
}))
app.use(cv)
app.use(addproject)
app.use(login)
app.use(logout)
app.use(home)
app.use((req, res, next) => {
    res.status(404).render("404", { pagetitle: "error" })
})

app.listen(8080)