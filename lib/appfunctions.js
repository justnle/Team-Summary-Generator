'use strict';

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const open = require('open');
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');
const genInfo = require('./generateInfo');
const prompts = require('./prompts');
const writeFileAsync = util.promisify(fs.writeFile);

const teamArr = [];
const managerArr = [];

async function addTeam(role) {
  let newRole;

  switch (role) {
    case 'Engineer':
      await inquirer.prompt(prompts.engineerQuestions).then(answers => {
        newRole = new Engineer(
          answers.name,
          answers.id,
          role,
          answers.email,
          answers.extra
        );
        teamArr.push(newRole);
      });
      break;

    case 'Intern':
      await inquirer.prompt(prompts.internQuestions).then(answers => {
        newRole = new Intern(
          answers.name,
          answers.id,
          role,
          answers.email,
          answers.extra
        );
        teamArr.push(newRole);
      });
      break;

    default:
      await inquirer.prompt(prompts.managerQuestions).then(answers => {
        newRole = new Manager(
          answers.name,
          answers.id,
          role,
          answers.email,
          answers.extra
        );
        managerArr.push(newRole);
      });
  }
}

async function additionalMember() {
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
          await addTeam('Engineer');
          await additionalMember();
          break;

        case 'Intern':
          await addTeam('Intern');
          await additionalMember();
          break;

        default:
          console.log('Finished building team!');
      }
    });
}

async function saveHTML() {
  const teamHtmlArr = [];

  teamArr.sort((a, b) =>
    a.title > b.title ? 1 : a.title === b.title ? (a.id > b.id ? 1 : -1) : -1
  );

  teamArr.splice(0,0, managerArr[0]);
  
  for (const member of teamArr) {
    const htmlInfo = genInfo.generateTeam(member);
    teamHtmlArr.push(htmlInfo);
  }

  const html = genInfo.generateHTML(teamHtmlArr.join(' '));
  await writeFileAsync(__dirname + '/../output/team.html', html);
}

async function openHTML() {
  await open(__dirname + '/../output/team.html');
}

module.exports = {
  addTeam,
  additionalMember,
  saveHTML,
  openHTML,
};
