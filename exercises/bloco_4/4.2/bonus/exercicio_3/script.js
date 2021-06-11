let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersX5 = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (i + 1 < numbers.length) {
      numbersX5.push(numbers[i] * numbers[i + 1]);
    } else {
      numbersX5.push(numbers[i] * 2);
    } 
}

console.log(numbersX5)