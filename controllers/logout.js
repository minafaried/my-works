exports.logout = (req, res, next) => {
    req.session.token = ""
    req.session.username = ""
    res.redirect("/home");
}