//exercicio 1

const fatorial = (number) => number === 0 ? 1 : number * fatorial(number - 1)

console.log(fatorial(4))
