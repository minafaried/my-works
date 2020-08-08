const admins = require("../models/admin")
const projects = require("../models/project")
exports.loginpage = (req, res, next) => {
    res.render("login");
}

exports.login = (req, res, next) => {
    admin = new admins()
    admin.login(req.body.email, req.body.password)
        .then(([user, fieldData]) => {
            //console.log(rows.length);
            if (user.length != 0) {
                req.session.username = user[0].username
                req.session.token = user[0].token
                res.redirect("/home");
            } else {
                res.render("login");
            }
        }).catch((err) => {
            console.log(err);
        });
}