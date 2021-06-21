const assert = require('assert');

const wordLengths = (words) => {
  let letters = []
  for (i = 0; i < words.length; i += 1) {
    letters.push(words[i].length)
  }
  return letters
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);