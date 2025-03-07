import React, { useReducer, useState } from 'react';
import { counterReducer } from './counterReducer';

const initialState = { count: 0 };

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    dispatch({ type: 'increment', step });
  };

  const handleDecrement = () => {
    dispatch({ type: 'decrement', step });
  };

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
