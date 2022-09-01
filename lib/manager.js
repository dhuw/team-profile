const employee = require ("./employee");

class Manager extends employee {
    constructor (name, id, email, officeNumber) {
        this.officeNumber = officeNumber
        
    }
}