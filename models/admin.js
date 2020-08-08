const db = require('../database/db');

module.exports = class Project {

    constructor() {}
    login(email, password) {
        return db.execute("select token,username from users " +
            "where email='" + email + "'and password='" + password + "';")
    }
}