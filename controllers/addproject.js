const projects = require("../models/project")
exports.returnaddprojectpage = (req, res, next) => {
    res.render('addproject');
}

exports.addproject = (req, res, next) => {
    const project = new projects(req.body.nametext,
        req.body.descriptiontext,
        req.body.projectLinktext,
        req.body.projectImageLinktext);
    project.save().then(([rows, fieldData]) => {
        res.redirect("/home");
    }).catch(err => console.log(err))

}