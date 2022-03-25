function maiorPalavra(array) {
  let palavra = '';
  for (let i in array){
    if (array[i].length > palavra.length) {
      palavra = array[i]
    }
  }
  return palavra
}

console.log(maiorPalavra(array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))