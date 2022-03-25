const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let letter = 0;

  for (let index = 0; index < characters.length; index += 1) {
    if (characters[index] === 'a' || characters[index] === 'e') {
      results.push((letter += 1));
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof removeVowels, 'function');

assert.strictEqual(removeVowels(parameter), result);
