import React from 'react';
import { useCart } from '../context/CartContext';
import './CartPage.css';

function CartPage() {
  const { cartItems } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h2>{item.name}</h2>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
              </div>
              <div className="cart-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h2>Total: ${total.toFixed(2)}</h2>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;