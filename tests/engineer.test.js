const Engineer = require('../lib/engineer');

describe('Testing Engineer Class', () => {
    it('should be able to create instance of Engineer', () => {
        // data setup
        const name = 'Tina';
        const id = 99;
        const email = 'tina@gmail.com';
        const github = 'tinagit';
        // create case
        const engineer = new Engineer(name, id, email, github);
        // make assertion
        expect(engineer.name).toBe(name);
        expect(engineer.id).toBe(id);
        expect(engineer.email).toBe(email);
        expect(engineer.github).toBe(github);
    });
    it('should return expected value "Employee" when getRole() is called', () => {
        const role = 'Engineer';
        const rachel = new Engineer('Rachel', 40, 'rachel@gmail.com','rachelgit');
        expect(rachel.getRole()).toBe(role);
    });
});