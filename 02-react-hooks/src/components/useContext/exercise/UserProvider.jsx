import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [name, setName] = useState('');

  const updater = (newName) => {
    setName(newName);
  };

  return (
    <div>
      <UserContext.Provider value={{ name, updater }}>{children}</UserContext.Provider>
    </div>
  );
};

export { UserContext, UserProvider };
