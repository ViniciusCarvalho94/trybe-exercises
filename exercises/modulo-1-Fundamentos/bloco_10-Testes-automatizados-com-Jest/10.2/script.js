//exercicio 1
const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

//exercicio 2 e 3
const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};


//exercicio 4
const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

//exercicio 6
const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.name === name);
      (animal) ? resolve(animal) : reject('Nenhum animal com esse nome!')
    }, 100);
  })
);


//exercicio 6.2
const getAnimal = (name) => findAnimalByName(name).then(animal => animal);

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalAge = Animals.find((animal) => animal.age === age);
      (animalAge) ? resolve(animalAge) : reject('Nenhum animal com essa idade!');
    }, 100);
  })
)

const animalAge = (age) => findAnimalByAge(age).then(animal => animal)

module.exports = {
  uppercase,
  getUserName,
  getRepos,
  getAnimal,
  animalAge,
}