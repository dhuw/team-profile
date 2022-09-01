const employee = require ("./employee");

class Manager extends employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber
    }
    getRole() {
        return "manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}
//exporting manager.js
module.exports = Manager;