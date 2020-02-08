'use strict';

const library = require('./lib');

async function init() {
  console.log('Initializing...');
  console.log('--------------------');

  try {
    await library.appFunctions.promptUser();
  } catch (err) {
    console.log(err);
  }
}

init();
