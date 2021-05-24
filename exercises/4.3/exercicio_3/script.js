let numero = 100;
let caractere = '*';
let impresso = '';
let localImpresso = numero;

for (let linha = 0; linha <= numero; linha += 1) {
  for (let coluna = 0; coluna  <= numero; coluna  += 1) {
    if (coluna  < localImpresso) {
      impresso = impresso + ' '
    } else {
      impresso = impresso + caractere;
    }
  }
  console.log(impresso);
  impresso = '';
  localImpresso -= 1;
}
