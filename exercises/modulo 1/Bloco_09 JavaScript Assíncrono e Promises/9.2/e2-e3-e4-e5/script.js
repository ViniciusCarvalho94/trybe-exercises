const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    let arr = [];
    let number = 0;
    for (i = 0; i < 10; i += 1) {
      number = Math.round(Math.random() * 50);
      arr.push((number *= number));
      number = 0;
    }
    const total = arr.reduce((acc, curr) => acc + curr);
    total >= 8000 ? reject(total) : resolve(total);
  });
  promise
    .then(() => console.log('Promise resolvida'))
    
    //exercicio 3
    //.then((total) => [2, 3, 5, 10].map((numberTotal) => total / numberTotal))
    
    //exercicio 5
    //  .then((array) => array.reduce((acc, curr) => acc + curr))
    
    .catch(() => console.log('Promise rejeitada'))
    
    //exercicio 4
    //.catch(() =>
    //  console.log('É mais de oito mil! Essa promise deve ser quebrada!')
    //);
};

fetchPromise();
