import React from 'react';

import { AgeContext, NameContext } from './ContextConsumerA';

const ContextConsumerC = () => {
  return (
    <NameContext.Consumer>
      {(value) => (
        <AgeContext.Consumer>
          {(age) => {
            return (
              <div>
                <div>Name: {value.name}</div>
                <div>Age: {age.age}</div>
              </div>
            );
          }}
        </AgeContext.Consumer>
      )}
    </NameContext.Consumer>
  );
};

export default ContextConsumerC;
