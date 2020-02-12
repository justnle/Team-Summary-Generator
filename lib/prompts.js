'use strict';
let idArr = [];
let emailArr = [];
let gitArr = [];

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
        return 'Please enter a valid name.';
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: "What is your manager's ID?",
    validate: answer => {
      const check = answer.match(/^[1-9]{1,10}\d*/i);
      if (check) {
        if (idArr.includes(answer)) {
          return 'This ID is already taken. Please enter a different number.';
        } else {
          idArr.push(answer);
          return true;
        }
      } else {
        return 'Please enter a valid ID number (1-10 digits).';
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your manager's e-mail?",
    validate: answer => {
      const check = answer.match(/^\S+@\S+\.com|net|gov/i);
      if (check) {
        if (emailArr.includes(answer)) {
          return 'This email is already taken. Please enter a different email address.';
        } else {
          emailArr.push(answer);
          return true;
        }
      } else {
        return 'Please enter a valid e-mail address.';
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
        return 'Please enter a valid office room number (1-10 digits).';
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
        return 'Please enter a valid name.';
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: "What is your engineer's ID?",
    validate: answer => {
      const check = answer.match(/^[1-9]{1,10}\d*/i);
      if (check) {
        if (idArr.includes(answer)) {
          return 'This ID is already taken. Please enter a different number.';
        } else {
          idArr.push(answer);
          return true;
        }
      } else {
        return 'Please enter a valid ID number (1-10 digits).';
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your engineer's e-mail?",
    validate: answer => {
      const check = answer.match(/^\S+@\S+\.com|net|gov/i);
      if (check) {
        if (emailArr.includes(answer)) {
          return 'This email is already taken. Please enter a different email address.';
        } else {
          emailArr.push(answer);
          return true;
        }
      } else {
        return 'Please enter a valid e-mail address.';
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
        if (gitArr.includes(answer)) {
          return 'This GitHub username is already taken. Please enter a different username.';
        } else {
          gitArr.push(answer);
          return true;
        }
      } else {
        return 'Please enter a valid username.';
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
        return 'Please enter a valid name.';
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: "What is your intern's ID?",
    validate: answer => {
      const check = answer.match(/^[1-9]{1,10}\d*/i);
      if (check) {
        if (idArr.includes(answer)) {
          return 'This ID is already taken. Please enter a different number.';
        } else {
          idArr.push(answer);
          return true;
        }
      } else {
        return 'Please enter a valid ID number (1-10 digits).';
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your intern's e-mail?",
    validate: answer => {
      const check = answer.match(/^\S+@\S+\.com|net|gov/i);
      if (check) {
        if (emailArr.includes(answer)) {
          return 'This email is already taken. Please enter a different email address.';
        } else {
          emailArr.push(answer);
          return true;
        }
      } else {
        return 'Please enter a valid e-mail address.';
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
        return 'Please enter a valid school name.';
      }
    }
  }
];

module.exports = {
  managerQuestions,
  engineerQuestions,
  internQuestions
};
