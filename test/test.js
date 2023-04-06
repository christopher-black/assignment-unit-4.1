const assert = require('assert');
const { expect } = require('chai');
const { hello, helloName } = require('../assignment/scripts/function-practice.js');


describe('Automated tests', function () {
  describe(`should return the string 'hello'`, function () {
    it(`should return the string 'hello'`, function () {
      assert.equal(hello(), 'Hello World!');
    });
  });
  describe(`should return the string 'Hello, Your Name!'`, function () {
    it(`should return the string 'Hello, Your Name!'`, function () {
      const result = helloName('Your Name');
      expect(result, 'helloName() does not return anything').to.exist;
      result.should.be.a('string');
      result.length.toBeGreaterThan(0);
      assert.equal(result, 'Hello, Your Name!');
    });
  });
});

const lint = require('mocha-eslint');

// Array of paths to lint
// Note: a seperate Mocha test will be run for each path and each file which
// matches a glob pattern
const paths = [
  'assignment/scripts/function-practice.js',
];

const options = {
  // Consider linting warnings as errors and return failure
  strict: true,  // Defaults to `false`, only notify the warnings

  // Specify the mocha context in which to run tests
  contextName: 'Code formatting',  // Defaults to `eslint`, but can be any string
};

// Run the linter as it's own test
lint(paths, options);