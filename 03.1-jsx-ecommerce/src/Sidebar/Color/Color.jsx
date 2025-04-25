import React from 'react';
import { Input } from '../Input/Input';
import './Color.css';

const Color = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <Input handleInputChange={handleChange} value="" title="All" name="color" color="#333" />
      <Input handleInputChange={handleChange} value="black" title="Black" name="color" color="black" />
      <Input handleInputChange={handleChange} value="blue" title="Blue" name="color" color="blue" />
      <Input handleInputChange={handleChange} value="red" title="Red" name="color" color="red" />
      <Input handleInputChange={handleChange} value="green" title="Green" name="color" color="green" />
      <Input handleInputChange={handleChange} value="yellow" title="Yellow" name="color" color="gold" />
    </div>
  );
};

export { Color };
