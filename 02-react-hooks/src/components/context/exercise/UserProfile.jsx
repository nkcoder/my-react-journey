import React, { useContext } from 'react';
import { UserContext } from './UserProvider';
const UserProfile = () => {
  const { name } = useContext(UserContext);

  return (
    <div>
      <h1>User Profile</h1>
      <h2>Name: {name}</h2>
    </div>
  );
};

export default UserProfile;
