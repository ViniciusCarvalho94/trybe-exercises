//body
let body = document.getElementById('container')
body.style.backgroundColor = '#F3F3F3'

//cabeçalho
let header = document.getElementById('header-container')
header.style.backgroundColor = '#49B069'


//tabelas
let urgente = document.querySelector('.emergency-tasks')
urgente.style.backgroundColor = '#F29F85'

let naoUrgente = document.querySelector('.no-emergency-tasks')
naoUrgente.style.backgroundColor = '#F8DB5E'

//titulos tabelas
let tituloUrgente = document.querySelectorAll('.emergency-tasks div h3')

for (let i = 0; i < tituloUrgente.length; i += 1) {
  tituloUrgente[i].style.backgroundColor = '#A50BF2'
}

let tituloNaoUrgentes = document.querySelectorAll('.no-emergency-tasks div h3')

for (let i = 0; i < tituloNaoUrgentes.length; i += 1) {
  tituloNaoUrgentes[i].style.backgroundColor = '#232525'
}

// rodapé
let rodape = document.getElementById('footer-container')
rodape.style.backgroundColor = '#123533'