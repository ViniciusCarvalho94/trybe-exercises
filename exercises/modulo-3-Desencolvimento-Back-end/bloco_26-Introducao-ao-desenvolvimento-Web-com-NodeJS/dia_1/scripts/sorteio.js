const readline = require('readline-sync');

const number = readline.questionInt('Escolha um número para o sorteio! ');

function randomNumber() {
  return Math.floor(Math.random() * 11);
}

function feedback() {
  const winnerNumber = randomNumber()

  if(number === winnerNumber) {
    return 'Parabéns, número correto!';
  } else {
    return `Opa, não foi dessa vez. O número era ${winnerNumber} !`;
  }
};

console.log(feedback());

module.export = feedback;