const specialFruit = ['Morango', 'Banana', 'Maracuja'];

const additionalItens = ['Chocolate', 'Leite Condensado', 'Agua'];

const fruitSalad = (fruit, additional) => {
  const fruitWithAdditionalItens = [...fruit, ...additional]
  return fruitWithAdditionalItens
};

console.log(fruitSalad(specialFruit, additionalItens));