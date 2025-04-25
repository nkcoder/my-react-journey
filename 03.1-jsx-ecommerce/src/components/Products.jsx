import ProductCard from './ProductCard';

const Products = ({ products }) => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-6" style={{ gap: '1rem' }}>
        {products.length === 0 ? (
          <div className="col-span-4 py-10 text-center">
            <h3 className="text-xl font-medium text-gray-600">No products found</h3>
            <p className="mt-2 text-gray-500">Try changing your filters</p>
          </div>
        ) : (
          products.map((product) => (
            <ProductCard key={`${product.title}-${product.color}`} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Products; 