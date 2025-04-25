import { AiFillStar } from 'react-icons/ai';

// Helper function to create a product with consistent structure
const createProduct = (
  img,
  title,
  reviews = 123,
  prevPrice = '$140.00',
  newPrice,
  company,
  color,
  category
) => ({
  img,
  title,
  star: <AiFillStar className="text-primary text-xl" />,
  reviews: `(${reviews} reviews)`,
  prevPrice,
  newPrice,
  company,
  color,
  category,
});

export const products = [
  createProduct(
    'https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg',
    'Nike Air Monarch IV',
    123,
    '$140.00',
    '200',
    'Nike',
    'white',
    'sneakers'
  ),
  createProduct(
    'https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg',
    'Nike Air Vapormax Plus',
    123,
    '$140.00',
    '200',
    'Nike',
    'red',
    'sneakers'
  ),
  createProduct(
    'https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg',
    'Nike Waffle One Sneaker',
    123,
    '$140.00',
    '200',
    'Nike',
    'green',
    'sneakers'
  ),
  createProduct(
    'https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg',
    'Nike Running Shoe',
    123,
    '$140.00',
    '200',
    'Adidas',
    'black',
    'sneakers'
  ),
  createProduct(
    'https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg',
    'Flat Slip On Pumps',
    123,
    '$140.00',
    '200',
    'Vans',
    'green',
    'flats'
  ),
  createProduct(
    'https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg',
    'Knit Ballet Flat',
    123,
    '$140.00',
    '50',
    'Adidas',
    'black',
    'flats'
  ),
  createProduct(
    'https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg',
    'Loafer Flats',
    123,
    '$140.00',
    '50',
    'Vans',
    'white',
    'flats'
  ),
  createProduct(
    'https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg',
    'Nike Zoom Freak',
    123,
    '$140.00',
    '200',
    'Nike',
    'green',
    'sneakers'
  ),
  createProduct(
    'https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg',
    "Nike Men's Sneaker",
    123,
    '$140.00',
    '200',
    'Adidas',
    'blue',
    'sneakers'
  ),
  createProduct(
    'https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg',
    'PUMA BLACK-OCE',
    123,
    '$140.00',
    '150',
    'Puma',
    'green',
    'sneakers'
  ),
  createProduct(
    'https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg',
    'Pacer Future Sneaker',
    123,
    '$140.00',
    '150',
    'Puma',
    'red',
    'sneakers'
  ),
  createProduct(
    'https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg',
    'Unisex-Adult Super',
    123,
    '$140.00',
    '150',
    'Puma',
    'black',
    'sneakers'
  ),
  createProduct(
    'https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg',
    'Roma Basic Sneaker',
    123,
    '$140.00',
    '150',
    'Puma',
    'white',
    'sneakers'
  ),
  createProduct(
    'https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg',
    'Pacer Future Doubleknit',
    123,
    '$140.00',
    '150',
    'Puma',
    'black',
    'sneakers'
  ),
  createProduct(
    'https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg',
    'Fusion Evo Golf Shoe',
    123,
    '$140.00',
    '100',
    'Puma',
    'green',
    'sneakers'
  ),
  createProduct(
    'https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg',
    'Rainbow Chex Skate',
    123,
    '$140.00',
    '100',
    'Vans',
    'red',
    'flats'
  ),
  createProduct(
    'https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg',
    'Low-Top Trainers',
    123,
    '$140.00',
    '100',
    'Vans',
    'white',
    'sandals'
  ),
  createProduct(
    'https://m.media-amazon.com/images/I/71pf7VFs9CL._AC_UX575_.jpg',
    'Vans Unisex Low-Top',
    123,
    '$140.00',
    '100',
    'Vans',
    'blue',
    'sandals'
  ),
  createProduct(
    'https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg',
    'Classic Bandana Sneakers',
    123,
    '$140.00',
    '50',
    'Nike',
    'black',
    'sandals'
  ),
]; 