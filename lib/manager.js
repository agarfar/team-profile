const Employee = require('./employee');
// const managerList = [];


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

// test if values display properly
// const eric = new Manager('Eric', 24, "taco@taco.com", 88)

// for (const [key, value] of Object.entries(eric)) {
//     console.log(`${key}: ${value}`);
// }

// console.log(eric.getRole());

// managerList.push(eric);
// managerList.push(new Manager('Tommy', 80, "burrito@burrito.com", 01))

// for (let i = 0; i < managerList.length; i++){
//     console.log(managerList[i].name, managerList[i].getRole())
// }

module.exports = Manager;