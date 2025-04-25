import { Input } from '../Input/Input';
import './Category.css';

const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <Input handleInputChange={handleChange} value="" title="All" name="category" color="#333" />
        <Input handleInputChange={handleChange} value="sneakers" title="Sneakers" name="category" color="#333" />
        <Input handleInputChange={handleChange} value="flats" title="Flats" name="category" color="#333" />
        <Input handleInputChange={handleChange} value="sandals" title="Sandals" name="category" color="#333" />
        <Input handleInputChange={handleChange} value="heels" title="Heels" name="category" color="#333" />
      </div>
    </div>
  );
};

export { Category };
