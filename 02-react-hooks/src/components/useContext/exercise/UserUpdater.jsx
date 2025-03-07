import React, { useContext, useState } from 'react';
import { UserContext } from './UserProvider';
const UserUpdater = () => {
  const { updater } = useContext(UserContext);
  const [newName, setNewName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updater(newName);
    setNewName('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={(e) => setNewName(e.target.value)} />
        <button type="submit">Update Name</button>
      </form>
    </div>
  );
};

export default UserUpdater;
