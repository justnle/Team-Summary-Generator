'use strict';

const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, title, email, officeNumber) {
    super(name, id, title, email);
    this.extra = officeNumber;
    this.getOfficeNumber= function() {
      return officeNumber;
    };
  }
}

module.exports = Manager;
