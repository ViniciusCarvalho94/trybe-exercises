//exercicio 1

const factorial = (number) => number === 0 ? 1 : number * factorial(number - 1)

console.log(factorial(4))


//exercicio 2

const longestWord = 'Antônio foi no banheiro e não sabemos o que aconteceu';
let bigWord = '';
longestWord.split(' ').forEach(word => {
  if (word.trim().length > bigWord.length) {
    bigWord = word.trim();
  }
})

console.log(bigWord)