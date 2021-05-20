let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let imparTotal = 0;
let impar = 0;

for (let i = 0; i < numbers.length; i += 1) {
  impar =(numbers[i] % 2) === 1
  if (impar === true) {
    imparTotal = imparTotal += 1; 
  }
}

if (imparTotal > 0) {
  console.log('Existe ' + imparTotal + ' números ímpares nesse array!')
} else {
  console.log('nenhum valor ímpar encontrado')
}