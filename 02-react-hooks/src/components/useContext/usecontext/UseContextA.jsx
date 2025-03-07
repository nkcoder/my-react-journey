import React from 'react';
import { AgeContext, NameContext } from './ContextData';
import UseContextB from './UseContextB';

const UseContextA = () => {
  return (
    <NameContext.Provider value={'John'}>
      <AgeContext.Provider value={20}>
        <UseContextB />
      </AgeContext.Provider>
    </NameContext.Provider>
  );
};

export default UseContextA;
