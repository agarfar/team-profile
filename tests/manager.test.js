const Manager = require('../lib/manager');

describe('Testing Manager Class', () => {
    it('should be able to create instance of Manager', () => {
        // data setup
        const name = 'Eric';
        const id = 1;
        const email = 'eric@gmail.com';
        const officeNumber = 1;
        // create case
        const manager = new Manager(name, id, email, officeNumber);
        // make assertion
        expect(manager.name).toBe(name);
        expect(manager.id).toBe(id);
        expect(manager.email).toBe(email);
        expect(manager.officeNumber).toBe(officeNumber);
    });
    it('should return expected value "Manager" when getRole() is called', () => {
        const role = 'Manager';
        const eric = new Manager('Eric', 1, 'eric@gmail.com', 1);
        expect(eric.getRole()).toBe(role);
    });
});