//exercicio 1
const factorial = (number) => number === 0 ? 1 : number * factorial(number - 1);

console.log(factorial(4));

//exercicio 2
const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))

//exercicio 3
let clickCount = 0
const textToDisplay = document.getElementById("count")
document.getElementById("click-btn").addEventListener("click", () => textToDisplay.innerHTML = clickCount += 1)

//exercicio 4
const string = 'Git, Github, Bash, Unix, HTML, CSS, JavaScript'
const bestSkill = (x) => x.substr(x.indexOf('J'), x.lastIndexOf('t'))
const skills = (x) => x.replace(/,/g, ';') 

console.log(`Eu estou ficando bom e gosto mais de ${bestSkill(string)}!`)
console.log(`As minhas skills que aprendi e continuo aprendrendo são: ${skills(string)} #goTrybe`)
