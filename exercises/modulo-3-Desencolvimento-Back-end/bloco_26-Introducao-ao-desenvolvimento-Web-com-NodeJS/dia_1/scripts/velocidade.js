const readline = require('readline-sync')

const distance = readline.questionInt('Qual a distância você quer percorrer em metros? ');
const time = readline.questionInt(`Percorrer ${distance}m em quantos segundos? `)

function metersPerSecond(distance, time) {
  return `A velocidade necessaria para pecorrer ${distance}m em ${time}s é ${distance / time}m/s`
}

console.log(metersPerSecond(distance, time));

module.export = metersPerSecond;