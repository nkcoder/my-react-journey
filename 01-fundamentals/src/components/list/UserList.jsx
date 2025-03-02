import React from 'react';

const UserList = () => {
  const users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Jim', age: 35 },
  ];

  return (
    <div>
      <h2>User List</h2>
      {users.map(({ id, name, age }) => (
        <div key={id}>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
