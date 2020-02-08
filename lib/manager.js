'use strict';

const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, title, email, officeNumber) {
    super(name, id, title, email);
    this.officeNumber = officeNumber;
    this.extra = officeNumber;
    this.getOfficeNumber= function() {
      return officeNumber;
    };
  }
  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;
