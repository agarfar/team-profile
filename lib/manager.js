// bring in Employee class
const Employee = require('./employee');

// Create subclass Manager from Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // Manager methods
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;