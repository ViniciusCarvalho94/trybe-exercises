import React, { useEffect, useState } from 'react';

function Provider() {
  const [randomNumber, setRandomNumber] = useState(3)
  const [multFive, setMultFive] = useState(false)

  function toRandomNumber() {
    const number = Math.floor(Math.random()*100)
    setRandomNumber(number)
  }

  useEffect(() => {
    setInterval(() => {
      toRandomNumber()
    }, 10000) 
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
      <p>{randomNumber} {multFive && 'Acertou'}</p>
    </>
  );
};

export default Provider;
