// exercicio 1 ID
document.getElementById('page-title').innerText = 'Trilogia Bourne';

// exercicio 2 ID
document.getElementById('second-paragraph').innerText = 'Eu sei que o Trilogia Bourne são três filmes!';

// exercicio 3 ID
document.getElementById('subtitle').innerText = 'Explicação sobre o titulo!'

// ===========================

// exercicio 2 CLASS
document.getElementsByClassName('paragrafos')

// exercicio 3 CLASS
const paragrafo = document.getElementsByClassName('paragrafos')[0]
paragrafo.style.background = 'lightgray';

// exercicio 4 TAG
const paragrafo2 = document.getElementsByTagName('h4')[0];
paragrafo2.style.color = 'blue';