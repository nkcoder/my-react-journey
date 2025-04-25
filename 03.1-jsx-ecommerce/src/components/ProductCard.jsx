import { BsFillBagFill } from 'react-icons/bs';

const ProductCard = ({ product }) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-100 p-4">
        <img 
          src={product.img} 
          alt={product.title}
          className="mx-auto h-48 w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Product Details */}
      <div className="flex flex-grow flex-col p-4">
        <h3 className="mb-2 text-base font-medium text-secondary line-clamp-2">{product.title}</h3>
        
        {/* Reviews */}
        <div className="mb-3 flex items-center">
          <span className="text-primary">{product.star}</span>
          <span className="ml-1 text-sm text-gray-500">{product.reviews}</span>
        </div>
        
        {/* Price and Add to Cart */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <del className="text-xs text-gray-500">{product.prevPrice}</del>
            <span className="text-base font-semibold text-secondary">${product.newPrice}</span>
          </div>
          <button className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-gray-100">
            <BsFillBagFill className="text-gray-600" />
          </button>
        </div>
        
        {/* Company & Category - Small text */}
        <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-500">
          <span className="inline-block rounded-full bg-gray-100 px-2 py-1">{product.company}</span>
          <span className="inline-block rounded-full bg-gray-100 px-2 py-1 capitalize">{product.category}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 