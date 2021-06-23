const newEmployees = () => {
  const employees = {
    id1: name('Pedro Guerra'),
    id2: name('Luiza Drumond'),
    id3: name('Carla Paiva'),
  };
  return employees;
};

const name = (param) => {
  const string = param.toLowerCase().replace(' ', '_');
  const email = `${string}@trybe.com`;
  const employees = {nome: param, email: email};
  return employees;
};

console.log(newEmployees())