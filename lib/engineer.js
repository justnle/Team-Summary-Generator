'use strict';

const Employee = require('./employee');

class Engineer extends Employee {
  constructor(name, id, title, email, github) {
    super(name, id, title, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.extra = github;
    this.getGithub = function () {
        return github;
    }
  }
}

module.exports = Engineer;
