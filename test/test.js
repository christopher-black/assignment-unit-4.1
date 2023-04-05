const assert = require('assert');
const { expect } = require('chai');
const { hello, helloName } = require('../assignment/scripts/function-practice.js');
describe('Automated tests', function () {
    describe(`hello()`, function () {
        it(`should return the string 'hello'`, function () {
            assert.equal(hello(), 'Hello World!');
        });
    });
    describe(`helloName()`, function () {
        it(`should return the string 'Hello, name!'`, function () {
            const result = helloName('Jane');
            expect(result, 'helloName() does not return anything').to.exist;
            result.should.be.a('string');
            result.length.toBeGreaterThan(0);
            assert.equal(hello(), 'Hello, Jane!');
        });
    });
});