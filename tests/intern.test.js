const Intern = require('../lib/intern');

describe('Testing Intern Class', () => {
    it('should be able to create instance', () => {
        // data setup
        const name = 'Thomas';
        const id = 67;
        const email = 'tommy@gmail.com';
        const school = 'UCSD';
        // create case
        const intern = new Intern(name, id, email, school);
        // make assertion
        expect(intern.name).toBe(name);
        expect(intern.id).toBe(id);
        expect(intern.email).toBe(email);
        expect(intern.school).toBe(school);
    });
    it('should return expected value "Employee" when getRole() is called', () => {
        const role = 'Intern';
        const linda = new Intern('Linda', 67, 'linda@gmail.com', 'UCSB');
        expect(linda.getRole()).toBe(role);
    });
});