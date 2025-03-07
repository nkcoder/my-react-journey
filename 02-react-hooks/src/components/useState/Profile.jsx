import React, { useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    age: 0,
  });

  const handleNameChange = (e) => {
    setProfile({ ...profile, name: e.target.value });
  };

  const handleAgeChange = (e) => {
    setProfile({ ...profile, age: e.target.value });
  };

  return (
    <div>
      <input type="text" name="name" value={profile.name} onChange={handleNameChange} />
      <input type="number" name="age" value={profile.age} onChange={handleAgeChange} />
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
};

export default Profile;
