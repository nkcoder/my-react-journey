import { Category } from './Category/Category';
import { Color } from './Color/Color';
import { Price } from './Price/Price';
import './Sidebar.css';

const Sidebar = ({ handleCategoryChange, handlePriceChange, handleColorChange }) => {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
        <h3>ShoeStyle</h3>
      </div>
      <Category handleChange={handleCategoryChange} />
      <Price handleChange={handlePriceChange} />
      <Color handleChange={handleColorChange} />
    </section>
  );
};

export { Sidebar };
