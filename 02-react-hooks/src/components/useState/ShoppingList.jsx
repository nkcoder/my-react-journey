import React, { useState } from 'react';

const ShoppingList = () => {
  const [products, setProducts] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const name = e.target.productName.value;
    const quality = e.target.productQuantity.value;

    if (!name || !quality) {
      console.log(`name and quality cannot be empty.`)
      return; 
    }

    const newProduct = {
      name,
      quality
    };

    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h1>Add a new Product</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="productName" />
        <input type="number" name="productQuantity" />
        <button type="submit">Add a product</button>
      </form>

      <h1>Shopping List</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.quality}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
