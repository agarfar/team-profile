const Employee = require('../lib/employee');

describe('Testing Employee Class', () => {
    it('should be able to create instance of Employee', () => {
        // data setup
        const name = 'Ana';
        const id = 77;
        const email = 'ana@gmail.com';
        // create case
        const employee = new Employee(name, id, email);
        // make assertion
        expect(employee.name).toBe(name);
        expect(employee.id).toBe(id);
        expect(employee.email).toBe(email);
    });
    it('should return expected value "Employee" when getRole() is called', () => {
        const role = 'Employee';
        const eric = new Employee('Eric', 53, 'eric@gmail.com');
        expect(eric.getRole()).toBe(role);
    });
});