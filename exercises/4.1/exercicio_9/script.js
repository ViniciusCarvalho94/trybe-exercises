let numero1 = 9;
let numero2 = 10;
let numero3 = 12;

let impar1 = (numero1 % 2) === 1;
let impar2 = (numero2 % 2) === 1;
let impar3 = (numero3 % 2) === 1;

if (impar1 == true || impar2 == true || impar3 == true) {
  console.log(true)
} else {
  console.log(false)
}