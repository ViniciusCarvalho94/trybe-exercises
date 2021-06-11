let n = 7;
let caractere = '*';
let linha = '';

let metade = (n + 1) / 2;
let esquerda = metade;
let direita = metade;

for (let l = 0; l <= metade; l += 1) {
  for (let c = 0; c <= n; c += 1) {
    if (c > esquerda && c < direita) {
      linha = linha + caractere;
    } else {
      linha = linha + ' ';
    }
  }
  console.log(linha);
  linha = '';
  direita += 1;
  esquerda -= 1
};