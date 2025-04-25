import { BsFillBagFill } from 'react-icons/bs';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <>
      <section className="card">
        <img src={product.img} alt={product.title} />
        <div className="card-details">
          <h3 className="card-title">{product.title}</h3>
          <section className="card-reviews">
            {product.star}
            <span className="total-reviews">{product.reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{product.prevPrice}</del>
              <span>${product.newPrice}</span>
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export { ProductCard };
