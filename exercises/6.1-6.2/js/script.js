function newState(value, name) {
  const dropdownState = document.getElementById('dropdown-state');
  let state = document.createElement('option');
  state.value = value;
  state.text = name;
  dropdownState.appendChild(state);
}

newState('', 'Selecione')
newState('ac', 'Acre')
newState('al', 'Alagoas')
newState('ap', 'Amapá')
newState('ba', 'Bahia')
newState('df', 'Distrito Federal')
newState('es', 'Espírito Santo')
newState('go', 'Goiás')
newState('ma', 'Maranhão')
newState('mt', 'Mato Grosso')
newState('ms', 'Mato Grosso do Sul')
newState('mg', 'Minas Gerais')
newState('pa', 'Pará')
newState('pb', 'Paraíba')
newState('pr', 'Paraná')
newState('pe', 'Pernambuco')
newState('pi', 'Piauí')
newState('rj', 'Rio de Janeiro')
newState('rn', 'Rio Grande do Norte')
newState('rs', 'Rio Grande do Sul')
newState('ro', 'Rondônia')
newState('rr', 'Roraima')
newState('sc', 'Santa Catarina')
newState('sp', 'São Paulo')
newState('se', 'Sergipe')
newState('to', 'Tocantins')

function formatCPF(cpf) {
  const elementoAlvo = cpf
  const cpfAtual = cpf.value   
  let cpfAtualizado;
  cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 
    function( regex, argumento1, argumento2, argumento3, argumento4 ) {
      return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
  })  
  elementoAlvo.value = cpfAtualizado; 
}

const form = document.querySelector('form');
const sumit = document.getElementById('submit');

form.addEventListener('submit', (e) => {
  e.preventDefault()
})

var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY',
  toString(date, format) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});