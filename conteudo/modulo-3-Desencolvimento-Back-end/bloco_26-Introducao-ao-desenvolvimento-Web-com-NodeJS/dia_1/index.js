const dogNames = require("dog-names");
const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');
const dog = dogNames.allRandom();

console.log(`Hello, ${name}! You are ${age} years old! And name of your dog is ${dog}`);