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
    it('should return this.name when getName() is called', () => {
        const name = 'Eric';
        const eric = new Manager(name, 53, 'eric@gmail.com', 1);
        expect(eric.getName()).toBe(eric.name);
    });
    it('should return this.email when getEmail() is called', () => {
        const email = 'eric@gmail.com'
        const eric = new Manager('Eric', 53, email, 1);
        expect(eric.getEmail()).toBe(eric.email);
    });
    it('should return this.id when getId() is called', () => {
        const id = 1;
        const eric = new Manager('Eric', id, 'eric@gmail.com', 1);
        expect(eric.getId()).toBe(eric.id);
    });
});