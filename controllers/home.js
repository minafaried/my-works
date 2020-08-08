const projects = require("../models/project")
exports.home = (req, res, next) => {
    projects.getProjects()
        .then(([rows, fieldData]) => {
            //console.log(req.session.token == undefined)
            if (req.session.token != undefined && req.session.token != "") {
                res.render("home", { allprojects: rows, username: req.session.username, token: req.session.token });
            } else {
                res.render("home", { allprojects: rows, username: "", token: "" });

            }
        }).catch(err => console.log(err))

}