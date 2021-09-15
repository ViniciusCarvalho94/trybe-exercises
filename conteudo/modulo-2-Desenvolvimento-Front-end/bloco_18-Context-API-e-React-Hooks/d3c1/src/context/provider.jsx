import React, { useEffect, useState } from 'react';

function Provider() {
  const [randomNumber, setRandomNumber] = useState()
  const [multFive, setMultFive] = useState(false)

  function toRandomNumber() {
    const number = Math.floor(Math.random()*100)
    setRandomNumber(number)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      toRandomNumber()
    }, 10000) 

    return(() => {
      clearInterval(interval)
    })
  }, []);

  useEffect(() => {
    if (randomNumber % 5 === 0 || randomNumber % 3 === 0) {
      setMultFive(true)
    }
  }, [randomNumber])

  useEffect(() => {
    if (multFive) {
      setTimeout(() => {
        setMultFive(false)
      }, 4000)
    }

  }, [multFive])

  return (
    <>
      <p>Um número aleatório vai aparecer na tela a cada 10 segundos, se caso ele for multiplo de 5 ou de 3 ira aparecer um "acertou" ao lado!</p>
      <p>{randomNumber} {multFive && 'Acertou'}</p>
    </>
  );
};

export default Provider;
