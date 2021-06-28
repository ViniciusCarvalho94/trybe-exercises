const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((result, names) => result + names.split('')
  .reduce((countOfLetters, actual) => {
    if (actual === 'a' || actual === 'A') {
      return countOfLetters + 1
    }
    return countOfLetters
  }, 0), 0)
}

assert.deepStrictEqual(containsA(), 20);