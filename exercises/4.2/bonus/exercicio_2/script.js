let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i2 = 1; i2 < numbers.length; i2 += 1) {
  for (let i = 0; i < i2; i += 1) {
    if (numbers[i2] > numbers[i]) {
      let position = numbers[i2];
      numbers[i2] = numbers[i];
      numbers[i] = position;
    }
  }
}

console.log(numbers)