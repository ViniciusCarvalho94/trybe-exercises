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
