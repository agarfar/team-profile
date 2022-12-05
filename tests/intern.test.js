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
    it('should return expected value "Intern" when getRole() is called', () => {
        const role = 'Intern';
        const linda = new Intern('Linda', 67, 'linda@gmail.com', 'UCSB');
        expect(linda.getRole()).toBe(role);
    });
    it('should return this.school when getSchool is called', () => {
        const school = 'Stanford';
        const lisa = new Intern('Lisa', 20, 'lisa@gmail.com', school);
        expect(lisa.getSchool()).toBe(lisa.school);
    });
    it('should return this.name when getName() is called', () => {
        const name = 'lisa';
        const lisa = new Intern(name, 53, 'lisa@gmail.com', 'Stanford');
        expect(lisa.getName()).toBe(lisa.name);
    });
    it('should return this.email when getEmail() is called', () => {
        const email = 'lisa@gmail.com'
        const lisa = new Intern('lisa', 53, email, 'Stanford');
        expect(lisa.getEmail()).toBe(lisa.email);
    });
    it('should return this.id when getId() is called', () => {
        const id = 47;
        const lisa = new Intern('lisa', id, 'lisa@gmail.com', 'Stanford');
        expect(lisa.getId()).toBe(lisa.id);
    });
});