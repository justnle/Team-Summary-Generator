'use strict';

const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, title, email, school) {
        super(name, id, title, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.extra = school;
        this.getSchool = function () {
            return school;
        }
    }
    getRole() {
        return 'Intern';
    }
};

module.exports = Intern;