const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
}

// test if values display properly
// const eric = new Engineer('Eric', 24, "taco@taco.com", 'ericsgithub')

// for (const [key, value] of Object.entries(eric)) {
//     console.log(`${key}: ${value}`);
// }

// console.log(eric.getRole());
// console.log(eric.getGithub());

module.exports = Engineer;