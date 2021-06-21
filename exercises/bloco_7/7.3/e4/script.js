const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

assert.strictEqual(typeof(myFizzBuzz), 'function')

// exercicio 1
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz')

// exercicio 2
assert.strictEqual(myFizzBuzz(6), 'fizz')

// exercicio 3
assert.strictEqual(myFizzBuzz(10), 'buzz')

// exercicio 4
assert.strictEqual(myFizzBuzz(2), 2)

// exercicio 5
assert.strictEqual(myFizzBuzz('8'), false)