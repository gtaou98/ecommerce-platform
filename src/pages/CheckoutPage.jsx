import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import './CheckoutPage.css';

function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    country: '',
    cardName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: '',
  });

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', formData);

    const orderDetails = [...cartItems];
    const orderTotal = orderDetails.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    if (currentUser) {
      const orders = JSON.parse(localStorage.getItem('orders')) || {};
      const userOrders = orders[currentUser.email] || [];
      const newOrder = {
        id: new Date().getTime(),
        date: new Date().toLocaleDateString(),
        items: orderDetails,
        total: orderTotal,
      };
      userOrders.push(newOrder);
      orders[currentUser.email] = userOrders;
      localStorage.setItem('orders', JSON.stringify(orders));
    }
    
    clearCart();
    
    navigate('/order-confirmation', {
      state: { 
        orderDetails,
        orderTotal 
      } 
    });
  };

  return (
    <div className="checkout-page">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Shipping Address</h2>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
          <div className="form-row">
            <input type="text" name="zip" placeholder="ZIP Code" value={formData.zip} onChange={handleChange} required />
            <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-section">
          <h2>Payment Information</h2>
          <input type="text" name="cardName" placeholder="Name on Card" value={formData.cardName} onChange={handleChange} required />
          <input type="text" name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} required />
          <div className="form-row">
            <input type="text" name="expMonth" placeholder="Exp. Month" value={formData.expMonth} onChange={handleChange} required />
            <input type="text" name="expYear" placeholder="Exp. Year" value={formData.expYear} onChange={handleChange} required />
            <input type="text" name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleChange} required />
          </div>
        </div>

        <button type="submit" className="place-order-btn">Place Order</button>
      </form>
    </div>
  );
}

export default CheckoutPage;