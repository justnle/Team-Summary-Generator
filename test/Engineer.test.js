'use strict';

const Engineer = require('../lib/Engineer');

test('Can set GitHUb account via constructor', () => {
  const testValue = 'GitHubUser';
  const engineer = new Engineer('Foo', 1, 'Engineer', 'test@test.com', testValue);
  expect(engineer.github).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
  const testValue = 'Engineer';
  const engineer = new Engineer('Foo', 1, testValue, 'test@test.com', 'GitHubUser');
  expect(engineer.getRole()).toBe(testValue);
});

test('Can get GitHub username via getGithub()', () => {
  const testValue = 'GitHubUser';
  const engineer = new Engineer('Foo', 1, 'Engineer', 'test@test.com', testValue);
  expect(engineer.getGithub()).toBe(testValue);
});
