import { Category } from './Category/Category';
import { Color } from './Color/Color';
import { Price } from './Price/Price';

const Sidebar = ({ handleCategoryChange, handlePriceChange, handleColorChange }) => {
  return (
    <div>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleCategoryChange} />
        <Price handleChange={handlePriceChange} />
        <Color handleChange={handleColorChange} />
      </section>
    </div>
  );
};

export { Sidebar };
