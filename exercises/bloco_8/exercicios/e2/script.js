const resultBet = (myNumber, luckNumber) => myNumber === luckNumber;

const winOrLoss = (myNumber, callback) => {
  const luckNumber = Math.ceil(Math.random() * 5)
  
  return callback(myNumber, luckNumber) ? 'Parabens você ganhou!' : 'Tente novamente!' 
}

console.log(winOrLoss(2, resultBet))