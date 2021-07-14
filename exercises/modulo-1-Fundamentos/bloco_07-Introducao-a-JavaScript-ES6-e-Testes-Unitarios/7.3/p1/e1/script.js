const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(typeof sum, 'function');

// exercicio 1
assert.strictEqual(sum(4, 5), 9);

// exercicio 2
assert.strictEqual(sum(0, 0), 0);

// exercicio 3
assert.throws(() => {
  sum(4, '5');
});

// exercicio 4
assert.throws(() => {
  sum(4, '5');
}, /^Error: parameters must be numbers$/);
