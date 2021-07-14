//exercicio 1
function encode(string) {
  let codigo = string.split('');
  for (let i in codigo) {
    if (codigo[i] === 'a') {
      codigo[i] = '1';
    }
    if (codigo[i] === 'e') {
      codigo[i] = '2';
    }
    if (codigo[i] === 'i') {
      codigo[i] = '3';
    }
    if (codigo[i] === 'o') {
      codigo[i] = '4';
    }
    if (codigo[i] === 'u') {
      codigo[i] = '5';
    }
  }
  let arrayString = codigo.join('');
  return arrayString;
}

function decode(string) {
  let codigo = string.split('');
  for (let i in codigo) {
    if (codigo[i] === '1') {
      codigo[i] = 'a';
    }
    if (codigo[i] === '2') {
      codigo[i] = 'e';
    }
    if (codigo[i] === '3') {
      codigo[i] = 'i';
    }
    if (codigo[i] === '4') {
      codigo[i] = 'o';
    }
    if (codigo[i] === '5') {
      codigo[i] = 'u';
    }
  }
  let arrayString = codigo.join('');
  return arrayString;
}

//exercicio 2
function techList(array, name) {
  let alfabetico = array.sort();
  let objetos = [];
  if (alfabetico.length === 0) {
    return 'Vazio!';
  }
  for (let i in alfabetico) {
    objetos.push({
      tech: alfabetico[i],
      name: name,
    });
  }
  return objetos;
}

//exercicio 3
function hydrate(string) {
  const numbers = /\d+/g;
  const result = string.match(numbers);
  const sum = result.reduce((acc, curr) => acc + parseInt(curr), 0);
  return sum > 1 ? `${sum} copos de água` : `${sum} copo de água`
}

module.exports = {
  encode,
  decode,
  techList,
  hydrate,
}