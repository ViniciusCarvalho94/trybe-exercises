const fetch = require('node-fetch');

const randomNumber = () => Math.round(Math.random() * 100);

const upperCase = (string) => string.toUpperCase();

const firstLetter = (string) => string.charAt(1);

const sumStrings = (stringA, stringB) => `${stringA} ${stringB}`;

const fetchDog = async () => {
  await fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json());
};

module.exports = {
  randomNumber,
  upperCase,
  firstLetter,
  sumStrings,
  fetchDog,
};
