let numeros = [];

for (let i = 1; i <= 25; i += 1) {
  numeros.push(i); 
}

let numerosDivididos = 0

for (let i = 0; i < numeros.length; i += 1) {
  numerosDivididos = numeros[i] / 2;
  console.log(numerosDivididos)
}
