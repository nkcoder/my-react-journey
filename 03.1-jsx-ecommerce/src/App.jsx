import { useState } from 'react';
import './App.css';
import { Navigation } from './Navigation/Navigation.jsx';
import { Products } from './Products/Products.jsx';
import { Recommended } from './Recommended/Recommended.jsx';
import { Sidebar } from './Sidebar/Sidebar.jsx';
import { products } from './db/data.jsx';

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

  const filterProducts = (category, price, color, search) => {
    console.log(`search: ${search}, category: ${category}, price: ${price}, color: ${color}, products: ${products.length}`);

    let result = products;
    if (search && search.length > 0) {
      result = result.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));
    }
    console.log(`Products after search: ${result.length}`);

    if (category && category.length > 0) {
      result = result.filter((product) => product.category === category);
    }
    console.log(`Products after category: ${result.length}`);

    if (price && price.length > 0) {
      result = result.filter((product) => product.newPrice === price);
    }
    console.log(`Products after price: ${result.length}`);

    if (company && company.length > 0) {
      result = result.filter((product) => product.company === company);
    }
    console.log(`Products after company: ${result.length}`);

    if (color && color.length > 0) {
      result = result.filter((product) => product.color === color);
    }
    console.log(`Products after color: ${result.length}`);

    console.log(`result: ${result.length}`);

    return result;
  }

  return (
    <div className="app-container">
      <div className="sidebar-wrapper">
        <Sidebar handleCategoryChange={handleCategoryChange} handlePriceChange={handlePriceChange} handleColorChange={handleColorChange} />
      </div>
      <Navigation handleSearchChange={handleSearchChange} search={search} />
      <div className="recommended-wrapper">
        <Recommended handleClick={handleCompanyChange} />
      </div>
      <div className="products-wrapper">
        <Products products={filterProducts(category, price, color, search)} />
      </div>
    </div>
  );
}

export default App;
