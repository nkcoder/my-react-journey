import { useState } from 'react';

const Sidebar = ({ handleCategoryChange, handlePriceChange, handleColorChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const categories = [
    { id: '', name: 'All' },
    { id: 'sneakers', name: 'Sneakers' },
    { id: 'flats', name: 'Flats' },
    { id: 'sandals', name: 'Sandals' },
    { id: 'heels', name: 'Heels' },
  ];

  const prices = [
    { id: '', name: 'All' },
    { id: '50', name: '$0 - $50' },
    { id: '100', name: '$50 - $100' },
    { id: '150', name: '$100 - $150' },
    { id: '200', name: 'Over $150' },
  ];

  const colors = [
    { id: '', name: 'All', color: '#333' },
    { id: 'black', name: 'Black', color: 'black' },
    { id: 'blue', name: 'Blue', color: 'blue' },
    { id: 'red', name: 'Red', color: 'red' },
    { id: 'green', name: 'Green', color: 'green' },
    { id: 'yellow', name: 'Yellow', color: 'gold' },
  ];

  const handleCategorySelect = (e) => {
    setSelectedCategory(e.target.value);
    handleCategoryChange(e);
  };

  const handlePriceSelect = (e) => {
    setSelectedPrice(e.target.value);
    handlePriceChange(e);
  };

  const handleColorSelect = (e) => {
    setSelectedColor(e.target.value);
    handleColorChange(e);
  };

  return (
    <aside className="h-full p-6">
      {/* Logo */}
      <div className="mb-8 text-center">
        <h1 className="mb-1 text-3xl text-secondary">🛒</h1>
        <h2 className="text-lg font-medium text-gray-600">ShoeStyle</h2>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="sidebar-title">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.id} className="flex cursor-pointer items-center">
              <input
                type="radio"
                name="category"
                value={category.id}
                checked={selectedCategory === category.id}
                onChange={handleCategorySelect}
                className="h-4 w-4 text-primary focus:ring-primary"
              />
              <span className="ml-2 text-gray-600 transition-transform hover:translate-x-1">
                {category.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="sidebar-title">Price</h3>
        <div className="space-y-2">
          {prices.map((price) => (
            <label key={price.id} className="flex cursor-pointer items-center">
              <input
                type="radio"
                name="price"
                value={price.id}
                checked={selectedPrice === price.id}
                onChange={handlePriceSelect}
                className="h-4 w-4 text-primary focus:ring-primary"
              />
              <span className="ml-2 text-gray-600 transition-transform hover:translate-x-1">
                {price.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div className="mb-8">
        <h3 className="sidebar-title">Colors</h3>
        <div className="space-y-2">
          {colors.map((color) => (
            <label key={color.id} className="flex cursor-pointer items-center">
              <input
                type="radio"
                name="color"
                value={color.id}
                checked={selectedColor === color.id}
                onChange={handleColorSelect}
                className="h-4 w-4 text-primary focus:ring-primary"
              />
              <span 
                className="ml-2 flex items-center text-gray-600 transition-transform hover:translate-x-1"
              >
                {color.id && (
                  <span 
                    className="mr-2 inline-block h-4 w-4 rounded-full" 
                    style={{ backgroundColor: color.color }}
                  ></span>
                )}
                {color.name}
              </span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 