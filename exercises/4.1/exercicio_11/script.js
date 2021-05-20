let salarioBruto = '3000.00';
let inss;
let salarioInss;
let ir;
let salarioFinal;

if (salarioBruto >= '0.00' && salarioBruto <= '1556.94') {
  inss = (salarioBruto / 100) * 8;
} else if (salarioBruto >= '1556.95' && salarioBruto <= '2594.92') {
  inss = (salarioBruto / 100) * 9;
} else if (salarioBruto >= '2594.93' && salarioBruto <= '5189.82') {
  inss = (salarioBruto / 100) * 11;
} else {
  inss = '570.88'; 
}

salarioInss = salarioBruto - inss;

if (salarioInss >= '1903.99' && salarioInss <= '2826.65') {
  ir = (salarioInss / 100) * 7.5 - 142.80;
} else if (salarioInss >= '2826.66' && salarioInss <= '3751.05') {
  ir = (salarioInss / 100) * 15 - 354.80;
} else if (salarioInss >= '3751.06' && salarioInss <= '4664.68') {
  ir = (salarioInss / 100) * 22.5 - 636.13;
} else if (salarioInss > '4664.63') {
  ir = (salarioInss / 100) * 27.5 - 869.36;
} else {
  ir = 0.00
}

if (salarioBruto < 0){
  console.log('O salário não pode ser um valor negativo')
}

salarioFinal = salarioInss - ir;

console.log(salarioFinal)