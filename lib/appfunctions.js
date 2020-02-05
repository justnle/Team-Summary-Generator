'use strict';

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const open = require('open');

const writeFileAsync = util.promisify(fs.writeFile);

let engineers = 0;
let interns = 0;
let team = 0;

async function promptUser() {
  console.log('Please build your team');

  await addManager();
  let member = await addTeamMember();

  while (member.teamMember !== "I don't want to add any more team members") {
    switch (member.teamMember) {
      case 'Engineer':
        await addEngineer();
        member = await addTeamMember();
        break;

      case 'Intern':
        await addIntern();
        member = await addTeamMember();
        break;

      default:
        console.log('Error');
    }
  }
  console.log('Finished building team!');
}

async function addManager() {
  ++team;

  const manager = await inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
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
      name: 'managerID',
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
      name: 'managerEmail',
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
      name: 'managerOffice',
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
  ]);
  return manager;
}

async function addTeamMember() {
  const addChoice = await inquirer.prompt([
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
  ]);
  return addChoice;
}

async function addEngineer() {
  ++engineers;
  ++team;

  const engineer = await inquirer.prompt([
    {
      type: 'input',
      name: 'engineerName',
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
      name: 'engineerID',
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
      name: 'engineerEmail',
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
      name: 'engineerGit',
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
  ]);
  return engineer;
}

async function addIntern() {
  ++interns;
  ++team;
  const intern = await inquirer.prompt([
    {
      type: 'input',
      name: 'internName',
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
      name: 'internID',
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
      name: 'internEmail',
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
      name: 'internSchool',
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
  ]);
  return intern;
}

promptUser();

module.exports = {
  promptUser,
  addManager,
  addTeamMember,
  addEngineer,
  addIntern
};
