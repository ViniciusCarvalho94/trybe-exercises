const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');


//  Copie esse arquivo e edite apenas ele;
//  Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function classeChange(click) {  
  let tech = document.querySelector('.tech')
  tech.classList.remove('tech')
  click.target.classList.add('tech')
  input.value = ''
}

divUm.addEventListener('click', classeChange)
divDois.addEventListener('click', classeChange)
divTres.addEventListener('click', classeChange)

//  Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function inputText(text){
  let textElement = document.querySelector('.tech');
  textElement.innerText = text.target.value;
};

input.addEventListener('input', inputText)  

//  Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;

function linkWeb() {
  window.open('https://app.betrybe.com/course', '_blank')
}

myWebpage.addEventListener('dblclick', linkWeb)

// 1. Que tal redirecionar para seu portifólio?
//  Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:

let title = document.querySelector('h1')

title.addEventListener('mouseover', function(){
  title.style.color = '#366EFB'
})

title.addEventListener('mouseout', function(){
  title.style.color = '#52C18B'
})


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.