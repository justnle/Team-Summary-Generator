'use strict';

const appFunctions = require(__dirname + '/lib/appFunctions');

async function init() {
  console.log('Please build your team.');
  await appFunctions.addManager();
  await appFunctions.addTeamMember();
  await appFunctions.display();
  await appFunctions.openHTML();
}

init();
