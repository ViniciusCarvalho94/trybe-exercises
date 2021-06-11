function numeroMaior(array) {
  let numero = 0;
  for (let i in array) {
    if (array[numero] > array[i]){
      numero = i
    }
  }
  return numero
}

console.log(numeroMaior(array = [2, 4, 6, 7, 10, 0, -3]))