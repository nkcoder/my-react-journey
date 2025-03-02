import React, { useState } from 'react';

// `initialState` can be a value or a function that returns a value.
// `nextState` can be a value or function that returns a value.
// `initialState` and `nextState` don't have to be the same type.
const RandomStateExample = () => {
  const [randomNumber, setRandomNumber] = useState(() =>
    Math.floor(Math.random() * 100)
  );

  const generateNewRandomNumber = () => {
    const newNumber = Math.floor(Math.random() * 100);
    setRandomNumber(newNumber);
  }

  return (
    <div>
      <h1>Random number: {randomNumber}</h1>
      <button onClick={generateNewRandomNumber}>Generate new number</button>
    </div>
  )
}

export default RandomStateExample