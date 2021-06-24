const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((element) => element.length === 5);
};

console.log(findNameWithFiveLetters());
