import React, { useState } from 'react';

const FunctionStateExample = () => {
  // If you pass a function as initialState, it will be treated as an initializer function. 
  // It should be pure, should take no arguments, and should return a value of any type. 
  // React will call your initializer function when initializing the component, and store its return value as the initial state.
  const [count, setCount] = useState(() => {
    const initialCount = 10;
    return initialCount;
  });

  const increment = () => {
    // If you pass a function as nextState, it will be treated as an updater function. It must be pure, should take the pending state as its only argument, and should return the next state. 
    setCount((previousCount) => previousCount + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default FunctionStateExample;
