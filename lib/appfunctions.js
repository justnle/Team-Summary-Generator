'use strict';

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const open = require('open');
// const library = require('../lib');

const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');
const genInfo = require('./generateMemberInfo');

const writeFileAsync = util.promisify(fs.writeFile);

const teamObjArr = [];

async function promptUser() {
  console.log('Please build your team');

  await addManager();
  await addTeamMember();
  const html = genInfo.generateHTML(teamObjArr);
  await writeFileAsync(__dirname + '/output/index.html', html);
}

async function addManager() {
  await inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is your manager's name?",
        validate: answer => {
          const check = answer.match(/^([a-z-']+)([a-z-']+(\.)?)([a-z-']+)?$/i);
          if (check) {
            return true;
          } else {
            return new Error('Please enter a valid name.');
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "What is your manager's ID?",
        validate: answer => {
          const check = answer.match(/^[0-9-]+$/i);
          if (check) {
            return true;
          } else {
            return new Error('Please enter a valid ID number.');
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
            return new Error('Please enter a valid e-mail address.');
          }
        }
      },
      {
        type: 'input',
        name: 'extra',
        message: "What is your manager's office number?",
        validate: answer => {
          const check = answer.match(/^[0-9-]+$/i);
          if (check) {
            return true;
          } else {
            return new Error('Please enter a valid ID number.');
          }
        }
      }
    ])
    .then(answers => {
      const newManager = new Manager(
        answers.name,
        answers.id,
        'Manager',
        answers.email,
        answers.extra
      );
      const genManager = genInfo.generateMemberInfo(newManager);
      teamObjArr.push(genManager);
    });
}

async function addTeamMember() {
  await inquirer
    .prompt([
      {
        type: 'list',
        name: 'teamMember',
        choices: [
          'Engineer',
          'Intern',
          "I don't want to add any more team members"
        ],
        message: 'Which team member would you like to add?'
      }
    ])
    .then(async choice => {
      switch (choice.teamMember) {
        case 'Engineer':
          await addEngineer();
          await addTeamMember();
          break;

        case 'Intern':
          await addIntern();
          await addTeamMember();
          break;

        default:
          console.log('Finished building team!');
      }
    });
}

async function addEngineer() {
  await inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is your engineer's name?",
        validate: answer => {
          const check = answer.match(/^([a-z-']+)([a-z-']+(\.)?)([a-z-']+)?$/i);
          if (check) {
            return true;
          } else {
            return new Error('Please enter a valid name.');
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "What is your engineer's ID?",
        validate: answer => {
          const check = answer.match(/^[0-9-]+$/i);
          if (check) {
            return true;
          } else {
            return new Error('Please enter a valid ID number.');
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
            return new Error('Please enter a valid e-mail address.');
          }
        }
      },
      {
        type: 'input',
        name: 'extra',
        message: "What is your engineer's GitHub username?",
        validate: answer => {
          const check = answer.match(/^((?! ).)+$/i);
          if (check) {
            return true;
          } else {
            return new Error('Please enter a valid name.');
          }
        }
      }
    ])
    .then(answers => {
      const newEngineer = new Engineer(
        answers.name,
        answers.id,
        'Engineer',
        answers.email,
        answers.extra
      );
      const genEngineer = genInfo.generateMemberInfo(newEngineer);
      teamObjArr.push(genEngineer);
    });
}

// this is not working right now
async function addIntern() {
  await inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is your intern's name?",
        validate: answer => {
          const check = answer.match(/^([a-z-']+)([a-z-']+(\.)?)([a-z-']+)?$/i);
          if (check) {
            return true;
          } else {
            return new Error('Please enter a valid name.');
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "What is your intern's ID?",
        validate: answer => {
          const check = answer.match(/^[0-9-]+$/i);
          if (check) {
            return true;
          } else {
            return new Error('Please enter a valid ID number.');
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
            return new Error('Please enter a valid e-mail address.');
          }
        }
      },
      {
        type: 'input',
        name: 'extra',
        message: "What is your intern's school?",
        validate: answer => {
          const check = answer.match(/^([a-z-']+)([a-z-']+(\.)?)([a-z-']+)?$/i);
          if (check) {
            return true;
          } else {
            return new Error('Please enter a valid school name.');
          }
        }
      }
    ])
    .then(answers => {
      const newIntern = new Intern(
        answers.name,
        answers.id,
        'Intern',
        answers.email,
        answers.extra
      );
      console.log(newIntern);

      const genIntern = genInfo.generateMemberInfo(newIntern);
      teamObjArr.push(genIntern);
    });
}

function generateHTML() {}

module.exports = {
  promptUser,
  addManager,
  addTeamMember,
  addEngineer,
  addIntern
};
