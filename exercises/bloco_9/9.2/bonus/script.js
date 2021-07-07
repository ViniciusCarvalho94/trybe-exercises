const sumRandomNumbers = () => {
  const arr = Array.from({ length: 10 }, () => Math.round(Math.random() * 50));
  const total = arr
    .map((number) => number * number)
    .reduce((acc, curr) => acc + curr);
  if (total >= 8000) {
    throw new Error();
  }
  return total;
};

const divideOfTotal = (total) =>
  [2, 3, 5, 10].map((num) => total / num).reduce((acc, curr) => acc + curr);

const fetchPromise = async () => {
  try {
    const total = await sumRandomNumbers();
    divideOfTotal(total);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
};

fetchPromise();
