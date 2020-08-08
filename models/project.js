const db = require('../database/db');

module.exports = class Project {

    constructor(name, description, link, imagelink) {
        this.projectname = name;
        this.description = description
        this.projectlink = link
        this.projectimagelink = imagelink
    }
    save() {
        return db.execute("INSERT INTO `projects` ( `projectname`, `projectimagelink`, `projectlink`, `description`) VALUES ('" +
            this.projectname +
            "','" + this.projectimagelink +
            "','" + this.projectlink +
            "','" + this.description + "');")
    }
    static getProjects() { return db.execute('select * from projects') }
}