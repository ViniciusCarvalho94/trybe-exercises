let custo = 500;
let venda = 1500;

let imposto = ((custo / 100) * 20);
let lucro = venda - (custo + imposto);

if (custo < 0 || venda < 0) {
  console.log('Ambos valores devem ser maior que 0')
} else {
  console.log('O lucro é de ' + lucro)
}