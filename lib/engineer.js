const employee = require ("./employee");

class Engineer extends employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github
    }
    getRole() {
        return "engineer";
    }
    getOfficeNumber() {
        return this.github;
    }
}
//exporting engineer.js
module.exports = Engineer;