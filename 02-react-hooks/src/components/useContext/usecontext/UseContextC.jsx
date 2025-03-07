import React, { useContext } from 'react';
import { AgeContext, NameContext } from './ContextData';

const UseContextC = () => {
  const name = useContext(NameContext);
  const age = useContext(AgeContext);

  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
    </div>
  );
};

export default UseContextC;
