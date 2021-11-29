const readline = require('readline-sync');

const weigth = readline.questionInt('Qual o seu peso em kg? ')
const heigth = readline.questionFloat('Qual a sua altura em metros? (ex: 1.80) ')

function calcImc(weigth, heigth) {
  return (weigth / (heigth ** 2)).toFixed(2)
}

function groupImc() {
  const imc = calcImc(weigth, heigth)
  if (imc < 18.5) {
    return `Seu IMC é ${imc} e está abaixo de 18,5 que é considerado abaixo do peso (magreza)!`
  } else if (imc >= 18.5 && imc <= 24.9) {
    return `Seu IMC é ${imc} e está entre 18,5 e 24,9 que é considerado peso normal!`
  } else if (imc >= 25 && imc <= 29.9) {
    return `Seu IMC é ${imc} e está entre 25 e 29,9 que é considerado acima do peso (sobrepeso)!`
  } else if (imc >= 30 && imc <= 34.9) {
    return `Seu IMC é ${imc} e está entre 30 e 34,9 que é considerado obesidade grau I`
  } else if (imc >= 35 && imc <= 39.9) {
    return `Seu IMC é ${imc} e está entre 35 e 39,9 que é considerado obesidade grau II`
  } else {
    return `Seu IMC é ${imc} e está 40,0 e acima que é considerado obesidade grau III e IV`
  }
}

console.log(groupImc());

module.export = calcImc;