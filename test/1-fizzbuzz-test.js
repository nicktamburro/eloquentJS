var assert = require('assert');
var fizzbuzz = require('../1-fizzbuzz.js');

//TODO, error with assert: "ReferenceError: assert is not defined"

describe('fizzbuzz', function() {
    it('if n is divisible by 3, prints fizz, if divisible by 5, prints buzz, if both, prints fizzbuzz', function() {

        var result1 = fizzbuzz();
//TODO learn how to write this type of test!
      assert.equal(result1, 11, 'add(1, 10) is 11');
    });
});