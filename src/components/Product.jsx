import React from 'react';
import { useCart } from '../context/CartContext';
import './Product.css';

function Product({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-price">${product.price.toFixed(2)}</div>
        <button onClick={() => addToCart(product)} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;