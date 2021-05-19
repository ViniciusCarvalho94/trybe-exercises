let A = 3;
let B = 5;
let C = 7;

if (A > B && A > C) {
  console.log("O valor de A é " + A + " que é maior que o valor de B e C")
} else if (B > A && B > C) {
  console.log("O valor de B é " + B + " que é maior que o valor de A e C")
} else if (C > A && C > B) {
  console.log("O valor de C é " + C + " que é maior que o valor de A e B")
} else {
  console.log("Não existe um valor maior entre A B e C!")
}