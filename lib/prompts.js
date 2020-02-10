'use strict';

const managerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: `What is your manager's name?`,
    validate: answer => {
      const check = answer.match(/^[A-Z](.|\s)*\S(.|\s)*$/i);
      if (check) {
        return true;
      } else {
        console.error('Please enter a valid name.');
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: "What is your manager's ID?",
    validate: answer => {
      const check = answer.match(/^[0-9-]{1,10}$/i);
      if (check) {
        return true;
      } else {
        console.error('Please enter a valid ID number (1-10 digits).');
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your manager's e-mail?",
    validate: answer => {
      const check = answer.match(
        /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i
      );
      if (check) {
        return true;
      } else {
        console.error('Please enter a valid e-mail address.');
      }
    }
  },
  {
    type: 'input',
    name: 'extra',
    message: "What is your manager's office number?",
    validate: answer => {
      const check = answer.match(/^[0-9-]{1,10}$/i);
      if (check) {
        return true;
      } else {
        console.error('Please enter a valid office room number (1-10 digits).');
      }
    }
  }
];

const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is your engineer's name?",
    validate: answer => {
      const check = answer.match(/^[A-Z](.|\s)*\S(.|\s)*$/i);
      if (check) {
        return true;
      } else {
        console.error('Please enter a valid name.');
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: "What is your engineer's ID?",
    validate: answer => {
      const check = answer.match(/^[0-9-]{1,10}$/i);
      if (check) {
        return true;
      } else {
        console.error('Please enter a valid ID number (1-10 digits).');
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your engineer's e-mail?",
    validate: answer => {
      const check = answer.match(
        /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i
      );
      if (check) {
        return true;
      } else {
        console.error('Please enter a valid e-mail address.');
      }
    }
  },
  {
    type: 'input',
    name: 'extra',
    message: "What is your engineer's GitHub username?",
    validate: answer => {
      const check = answer.match(/^[0-9a-zA-Z-]+$/i);
      if (check) {
        return true;
      } else {
        console.error('Please enter a valid username.');
      }
    }
  }
];

const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is your intern's name?",
    validate: answer => {
      const check = answer.match(/^[A-Z](.|\s)*\S(.|\s)*$/i);
      if (check) {
        return true;
      } else {
        console.error('Please enter a valid name.');
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: "What is your intern's ID?",
    validate: answer => {
      const check = answer.match(/^[0-9-]{1,10}$/i);
      if (check) {
        return true;
      } else {
        console.error('Please enter a valid ID number (1-10 digits).');
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your intern's e-mail?",
    validate: answer => {
      const check = answer.match(
        /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i
      );
      if (check) {
        return true;
      } else {
        console.error('Please enter a valid e-mail address.');
      }
    }
  },
  {
    type: 'input',
    name: 'extra',
    message: "What is your intern's school?",
    validate: answer => {
      const check = answer.match(/^[A-Z](.|\s)*\S(.|\s)*$/i);
      if (check) {
        return true;
      } else {
        console.error('Please enter a valid school name.');
      }
    }
  }
];

module.exports = {
    managerQuestions,
    engineerQuestions,
    internQuestions
};