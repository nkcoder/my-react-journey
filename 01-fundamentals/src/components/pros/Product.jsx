import React from 'react'

// destructuring props
const Product = ({name, price}) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Price: {price}</p>
    </div>
  )
}

export default Product