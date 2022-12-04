const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}

// test if values display properly
// const eric = new Intern('Eric', 24, "taco@taco.com", 'UCSB')

// for (const [key, value] of Object.entries(eric)) {
//     console.log(`${key}: ${value}`);
// }

// console.log(eric.getRole());
// console.log(eric.getSchool());

module.exports = Intern;