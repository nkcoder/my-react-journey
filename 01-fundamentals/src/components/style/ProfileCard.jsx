import React from 'react'

const ProfileCard = () => {
  const style = {
    backgroundColor: "lightblue",
    padding: "15px", 
    borderRadius: "8px",
    color: "black"
  };

  return (
    <div style={style}>
      <h1>Profile Card</h1>
      <p>This is a profile card</p>
    </div>
  )
}

export default ProfileCard