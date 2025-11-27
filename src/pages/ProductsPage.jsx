import React from 'react';
import Product from '../components/Product';

// Sample product data (same as before)
const products = [
  {
    id: 1,
    name: 'Stylish Backpack',
    description: 'A durable and stylish backpack for all your needs.',
    price: 49.99,
    image: 'https://via.placeholder.com/300x300.png?text=Backpack',
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    description: 'High-quality sound and long battery life.',
    price: 89.99,
    image: 'https://via.placeholder.com/300x300.png?text=Headphones',
  },
  {
    id: 3,
    name: 'Smart Watch',
    description: 'Stay connected and track your fitness goals.',
    price: 199.99,
    image: 'https://via.placeholder.com/300x300.png?text=Smart+Watch',
  },
];

function ProductsPage() {
  return (
    <div>
      <h1>Our Products</h1>
      <div className="product-list">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;