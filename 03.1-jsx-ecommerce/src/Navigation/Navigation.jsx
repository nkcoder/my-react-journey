import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import './Navigation.css';

const Navigation = ({ handleSearchChange, search }) => {
  return (
    <nav>
      <div className="nav-container">
        <input className="search-input" type="text" placeholder="Search products..." onChange={handleSearchChange} value={search} />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export { Navigation };
