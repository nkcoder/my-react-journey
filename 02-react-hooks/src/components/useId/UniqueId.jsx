import React, { useId } from 'react';

const UniqueId = () => {
  const id = useId();

  return (
    <div>
      <label htmlFor={`${id}-email`}>Email:</label>
      <input id={`${id}-email`} type="email" />
      <br />
      <label htmlFor={`${id}-password`}>Password:</label>
      <input id={`${id}-password`} type="password" />
    </div>
  )
}

export default UniqueId