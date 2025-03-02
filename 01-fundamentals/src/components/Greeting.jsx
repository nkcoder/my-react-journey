import React from 'react'

const Greeting = () => {
  const name = 'Daniel';
  const date = new Date().toLocaleDateString();

  return (
    <div>
      <h1>Hello {name}</h1>
      <p>Current date is: {date}</p>
    </div>
  )
}

export default Greeting