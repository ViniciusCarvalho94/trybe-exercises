const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};

const employer = (param) => {
  const string = param.toLowerCase().replace(' ', '_');
  const email = `${string}@trybe.com`;
  const allEmployees = {nome: param, email: email};
  return allEmployees;
};

console.log(newEmployees(employer))