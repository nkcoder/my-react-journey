import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';

const Navigation = ({ handleSearchChange, search }) => {
  return (
    <nav className="sticky top-0 z-20 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 shadow-sm">
      <div className="flex items-center">
        <span className="mr-3 text-xl font-bold text-secondary">🛒 ShoeStyle</span>
        <input
          className="w-64 rounded-md bg-gray-100 px-4 py-2 outline-none focus:ring-1 focus:ring-primary md:w-80"
          type="text"
          placeholder="Search products..."
          onChange={handleSearchChange}
          value={search}
        />
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-gray-500 transition-colors hover:text-secondary">
          <FiHeart className="h-6 w-6" />
        </a>
        <a href="#" className="text-gray-500 transition-colors hover:text-secondary">
          <AiOutlineShoppingCart className="h-6 w-6" />
        </a>
        <a href="#" className="text-gray-500 transition-colors hover:text-secondary">
          <AiOutlineUserAdd className="h-6 w-6" />
        </a>
      </div>
    </nav>
  );
};

export default Navigation; 