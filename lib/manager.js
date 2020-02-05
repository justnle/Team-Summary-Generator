'use strict';

const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.getOfficeNumber= function() {
      return officeNumber;
    };
  }
}

module.exports = Manager;
