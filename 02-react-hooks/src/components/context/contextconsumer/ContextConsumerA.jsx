import React, { useState } from 'react';
import ContextConsumerB from './ContextConsumerB';
import { AgeContext, NameContext } from './ContextData';
const ContextConsumerA = () => {
  const [name, setName] = useState('John');
  const [age, setAge] = useState(20);

  return (
    <NameContext.Provider value={{ name: name }}>
      <AgeContext.Provider value={{ age: age }}>
        <ContextConsumerB />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </AgeContext.Provider>
    </NameContext.Provider>
  );
};

export default ContextConsumerA;
