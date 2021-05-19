let A = 80
let B = 70
let C = -180

let ok;

if (A + B + C == 180) {
  console.log('true')
} else if (A + B + C !== 180 && A + B + C >= 0) {
  console.log('false')
} else {
  console.log('numero invalido')
}