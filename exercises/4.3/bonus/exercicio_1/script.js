let n = 7;
let caractere = '*';
let metade = (n + 1) / 2;
let esquerda = metade;
let direita = metade;
for (let l = 1; l <= metade; l += 1) {
  let linha = '';
  for (let c = 1; c <= n; c += 1) {
    if (c == esquerda || c == direita || l == metade) {
      linha += caractere;
    } else {
      linha += ' ';
    }
  }
  esquerda -= 1;
  direita += 1;
  console.log(linha);
}