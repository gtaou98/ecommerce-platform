import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

function Header() {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MyStore</Link>
      </div>
      <nav className="navigation">
        <ul>
          <li><NavLink to="/" className={({isActive}) => isActive ? "active" : ''}>Home</NavLink></li>
          <li><NavLink to="/products" className={({isActive}) => isActive ? "active" : ''}>Products</NavLink></li>
          <li>
            <NavLink to="/cart" className={({isActive}) => isActive ? "active" : ''}>
              Cart {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;