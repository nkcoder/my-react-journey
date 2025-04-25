import { useState } from 'react';
import Navigation from './components/Navigation';
import Products from './components/Products';
import Recommended from './components/Recommended';
import Sidebar from './components/Sidebar';
import { products } from './data/products';

function App() {
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [company, setCompany] = useState('');
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const filterProducts = () => {
    let filteredProducts = products;

    if (search) {
      filteredProducts = filteredProducts.filter((product) => 
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      filteredProducts = filteredProducts.filter((product) => 
        product.category === category
      );
    }

    if (price) {
      filteredProducts = filteredProducts.filter((product) => 
        product.newPrice === price
      );
    }

    if (company) {
      filteredProducts = filteredProducts.filter((product) => 
        product.company === company
      );
    }

    if (color) {
      filteredProducts = filteredProducts.filter((product) => 
        product.color === color
      );
    }

    return filteredProducts;
  };

  return (
    <div className="grid grid-cols-[15rem_1fr] min-h-screen">
      {/* Sidebar */}
      <div className="border-r border-gray-200 bg-white shadow-sm">
        <Sidebar 
          handleCategoryChange={handleCategoryChange}
          handlePriceChange={handlePriceChange}
          handleColorChange={handleColorChange}
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-2" style={{ gap: '0.5rem' }}>
        {/* Navigation */}
        <Navigation handleSearchChange={handleSearchChange} search={search} />
        
        {/* Recommended */}
        <div className="p-4 border-b border-gray-100">
          <Recommended handleClick={handleCompanyChange} />
        </div>
        
        {/* Products */}
        <div className="p-4">
          <Products products={filterProducts()} />
        </div>
      </div>
    </div>
  );
}

export default App;
