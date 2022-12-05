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
    it('should return expected value "Engineer" when getRole() is called', () => {
        const role = 'Engineer';
        const rachel = new Engineer('Rachel', 40, 'rachel@gmail.com', 'rachelgit');
        expect(rachel.getRole()).toBe(role);
    });
    it('should return this.github when getGithub() is called', () => {
        const github = 'mikeygit';
        const mikey = new Engineer('Michael', 30, 'mikey@gmail.com', github);
        expect(mikey.getGithub()).toBe(mikey.github);
    });
    it('should return this.name when getName() is called', () => {
        const name = 'mikey';
        const mikey = new Engineer(name, 53, 'mikey@gmail.com', 1);
        expect(mikey.getName()).toBe(mikey.name);
    });
    it('should return this.email when getEmail() is called', () => {
        const email = 'mikey@gmail.com'
        const mikey = new Engineer('mikey', 53, email, 1);
        expect(mikey.getEmail()).toBe(mikey.email);
    });
    it('should return this.id when getId() is called', () => {
        const id = 1;
        const mikey = new Engineer('mikey', id, 'mikey@gmail.com', 1);
        expect(mikey.getId()).toBe(mikey.id);
    });
});