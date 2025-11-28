import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './OrderConfirmationPage.css';

function OrderConfirmationPage() {
  const location = useLocation();
  const { orderDetails, orderTotal } = location.state || {};

  if (!orderDetails) {
    return (
      <div className="order-confirmation-page">
        <h1>Thank you for your order!</h1>
        <p>Your order has been placed successfully.</p>
        <Link to="/" className="home-link">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="order-confirmation-page">
      <h1>Thank You for Your Order!</h1>
      <p>Your order has been placed successfully. Here are the details:</p>
      
      <div className="order-summary">
        <h2>Order Summary</h2>
        {orderDetails.map(item => (
          <div key={item.id} className="order-item">
            <span className="item-name">{item.name} (x{item.quantity})</span>
            <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="order-total">
          <strong>Total: ${orderTotal.toFixed(2)}</strong>
        </div>
      </div>

      <Link to="/" className="home-link">Continue Shopping</Link>
    </div>
  );
}

export default OrderConfirmationPage;