import { ProductCard } from './ProductCard/ProductCard';
import './Products.css';

const Products = ({ products }) => {
  return (
    <>
      <section className="card-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
};

export { Products };
