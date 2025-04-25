import React from 'react';
import { Input } from '../Input/Input';
import './Price.css';

const Price = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title price-title">Price</h2>
      <Input handleInputChange={handleChange} value="" title="All" name="price" color="#333" />
      <Input handleInputChange={handleChange} value="50" title="$0 - $50" name="price" color="#333" />
      <Input handleInputChange={handleChange} value="100" title="$50 - $100" name="price" color="#333" />
      <Input handleInputChange={handleChange} value="150" title="$100 - $150" name="price" color="#333" />
      <Input handleInputChange={handleChange} value="200" title="Over $150" name="price" color="#333" />
    </div>
  );
};

export { Price };
