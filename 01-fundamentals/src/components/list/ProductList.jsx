import React from 'react';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Phone', price: '$699' },
    { id: 2, name: 'Tablet', price: '$999' },
    { id: 3, name: 'Laptop', price: '$1299' },
  ];

  return (
    <div>
      <h2>Product List</h2>
      {products.map(({ id, name, price }) => (
        <div key={id}>
          <h3>{name}</h3>
          <p>Price: {price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
