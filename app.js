'use strict';

const appFunctions = require(__dirname + '/lib/appFunctions');

async function init() {
  console.log('Please build your team.');

  await appFunctions.addTeam('Manager');
  await appFunctions.additionalMember();
  await appFunctions.display();
  await appFunctions.openHTML();
}

init();
