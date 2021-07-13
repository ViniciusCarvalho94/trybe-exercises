const assert = require('assert');

const sumAllNumbers = (numbers) => {
  let total = 0;
  for (i = 0; i < numbers.length; i += 1) {
    total = total + numbers[i];
  }
  return total;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
