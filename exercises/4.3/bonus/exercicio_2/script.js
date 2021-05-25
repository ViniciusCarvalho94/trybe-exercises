let divisor = 1;
let primo = 17;

for (let i = 2; i <= primo; i += 1) {
  if (primo % i === 0) { 
    divisor += 1
  }
}

if (divisor === 2) {
  console.log(primo + ' é primo')
} else {
  console.log(primo + ' não é primo')
}