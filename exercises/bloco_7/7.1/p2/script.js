//exercicio 1

const factorial = (number) =>
  number === 0 ? 1 : number * factorial(number - 1);

console.log(factorial(4));

//exercicio 2

const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))

//exercicio 3

let clickCount = 0
let textToDisplay = document.getElementById("text")

document.getElementById("button_test").addEventListener("click", () => textToDisplay.innerHTML = clickCount += 1)