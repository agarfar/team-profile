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
    it('should return this.name when getName() is called', () => {
        const name = 'Eric';
        const eric = new Employee(name, 53, 'eric@gmail.com');
        expect(eric.getName()).toBe(eric.name);
    });
    it('should return this.email when getEmail() is called', () => {
        const email = 'eric@gmail.com'
        const eric = new Employee('Eric', 53, email);
        expect(eric.getEmail()).toBe(eric.email);
    });
    it('should return this.id when getId() is called', () => {
        const id = 1;
        const eric = new Employee('Eric', id, 'eric@gmail.com');
        expect(eric.getId()).toBe(eric.id);
    });
});