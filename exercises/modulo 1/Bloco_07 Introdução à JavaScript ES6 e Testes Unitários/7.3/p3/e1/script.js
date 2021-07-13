const assert = require('assert');

const greetPeople = (parameter) => {
  let greeting = 'Hello ';
  let persons = [];
  for (const i in parameter) {
    persons.push(greeting + parameter[i]);
  }
  return persons;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof greetPeople, 'function');

assert.deepStrictEqual(greetPeople(parameter), result);
