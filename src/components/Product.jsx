import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

function Product({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="product-card-link">
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h3>{product.name}</h3>
          <div className="product-price">${product.price.toFixed(2)}</div>
        </div>
      </div>
    </Link>
  );
}

export default Product;