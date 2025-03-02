import React from 'react';

const UserStatus = ({ loggedIn, isAdmin }) => {
  return loggedIn && isAdmin ? <h1>Welcome Admin!</h1> : loggedIn ? <h1>Welcome User!</h1> : <h1>Please Login!</h1>;
};

export default UserStatus;
