let assert;
let expect;
if (typeof window === 'object') {
  // Run tests in browser
  assert = chai.assert;
  expect = chai.expect;
      // 'bdd' stands for "behavior driven development"
      mocha.setup('bdd');
} else {
  // Run tests in Node.js
  assert = require('assert');
  expect = require('chai').expect;

  const {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  } = require('../assignment/scripts/function-practice.js');
}

describe('Automated tests', function () {
  describe(`Returns the string 'hello'`, function () {
    it(`Returns the string 'hello'`, function () {
      assert.equal(hello(), 'Hello World!');
    });
  });
  describe(`Returns the string 'Hello, Your Name!'`, function () {
    it(`Returns the string 'Hello, Your Name!'`, function () {
      const result = helloName('Your Name');
      expect(result, 'helloName() does not return anything').to.exist;
      expect(result).to.be.a('string');
      expect(result.length).to.be.greaterThan(0);
      assert.equal(result, 'Hello, Your Name!');
    });
  });
  describe(`Returns the sum of two numbers`, function () {
    it(`Returns the sum of two numbers`, function () {
      const result = addNumbers(4, 5);
      expect(result, 'addNumbers() does not return anything').to.exist;
      expect(result).to.be.a('number');
      assert.equal(result, 9);
    });
  });
  describe(`Multiplies three numbers and returns the result`, function () {
    it(`Multiplies three numbers and returns the result`, function () {
      const result = multiplyThree(2, 3, 4);
      expect(result, 'multiplyThree() does not return anything').to.exist;
      expect(result).to.be.a('number');
      assert.equal(result, 24);
    });
  });
  describe(`Should check if number is positive`, function () {
    it(`Should check if number is positive`, function () {
      const result = isPositive(3);
      expect(result, 'isPositive() does not return anything').to.exist;
      expect(result).to.be.a('boolean');
      assert.equal(result, true);
      assert.equal(isPositive(0), false);
      assert.equal(isPositive(-3), false);
    });
  });
  describe(`Returns the last item in an Array`, function () {
    it(`Returns the last item in an Array`, function () {
      const result = getLast([2, 3, 4]);
      expect(result, 'getLast() does not return anything').to.exist;
      expect(result).to.be.a('number');
      assert.equal(result, 4);
    });
  });
  describe(`Finds an item in an Array`, function () {
    it(`Finds an item in an Array`, function () {
      const result = find(3, [2, 3, 4]);
      expect(result, 'find() does not return anything').to.exist;
      expect(result).to.be.a('boolean');
      assert.equal(result, true);
      assert.equal(find(5, [2, 3, 4]), false);
    });
  });
  describe(`STRETCH: Checks the first letter of a string`, function () {
    it(`STRETCH: Checks the first letter of a string`, function () {
      const result = isFirstLetter('a', 'apple');
      if (result === undefined) {
        // Skip the stetch goal if not attempted
        this.skip();
      } else {
        // Only add the stretch goal if attempted
        expect(result).to.be.a('boolean');
        assert.equal(result, true);
        assert.equal(isFirstLetter('z', 'apple'), false);
      }
    });
  });
  describe(`STRETCH: Sum all numbers of an array`, function () {
    it(`STRETCH: Sum all numbers of an array`, function () {
      const result = sumAll([1, 2, 3, 4, 5]);
      if (result === undefined) {
        // Skip the stetch goal if not attempted
        this.skip();
      } else {
        // Only add the stretch goal if attempted
        expect(result).to.be.a('number');
        assert.equal(result, 15);
        assert.equal(sumAll([5, 10, 20]), 35);
      }
    });
  });
  describe(`STRETCH: All postive numbers`, function () {
    it(`STRETCH: All positive number`, function () {
      const original = [0, -2, 3, -4, 5];
      const result = allPositive(original);
      if (result === undefined) {
        // Skip the stetch goal if not attempted
        this.skip();
      } else {
        // Only add the stretch goal if attempted
        assert.equal(result.length, 2);
        assert.notEqual(result.indexOf(3), -1);
        assert.notEqual(result.indexOf(5), -1);
        assert.equal(original.length, 5);
      }
    });
  });
});
if (typeof window === 'object') {
  mocha.run();
}
