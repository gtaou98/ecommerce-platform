import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductDetailPage.css';

function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Construct the correct path using import.meta.env.BASE_URL
        const response = await fetch(`${import.meta.env.BASE_URL}products.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products = await response.json();
        const foundProduct = products.find(p => p.id === parseInt(id));
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError('Product not found.');
        }
      } catch (e) {
        setError('Failed to fetch product details.');
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading product...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-image-container">
        <img src={product.image} alt={product.name} className="product-detail-image" />
      </div>
      <div className="product-detail-info">
        <h1 className="product-detail-name">{product.name}</h1>
        <p className="product-detail-description">{product.description || 'No description available.'}</p>
        <p className="product-detail-price">${product.price.toFixed(2)}</p>
        <button onClick={() => addToCart(product)} className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetailPage;