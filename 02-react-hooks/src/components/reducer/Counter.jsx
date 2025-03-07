import React, { useReducer, useState } from 'react';
import { reducer } from './counterReducer';

const initialState = { count: 0 };

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [step, setStep] = useState(1);

  return (
    <div>
      <h1>{state.count}</h1>
      <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} />
      <button onClick={() => dispatch({ type: 'increment', step })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement', step })}>Decrement</button>
    </div>
  );
};

export default Counter;
