import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const { currentUser, logout } = useContext(AuthContext);

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">E-Commerce</NavLink>
      </div>
      <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={() => setIsNavOpen(false)}>
            <NavLink to="/" className={({isActive}) => isActive ? "active" : ''} end>Home</NavLink>
          </li>
          <li onClick={() => setIsNavOpen(false)}>
            <NavLink to="/products" className={({isActive}) => isActive ? "active" : ''}>Products</NavLink>
          </li>
          <li onClick={() => setIsNavOpen(false)}>
            <NavLink to="/cart" className={({isActive}) => isActive ? "active" : ''}>
              Cart {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
            </NavLink>
          </li>
          {currentUser && (
            <li onClick={() => setIsNavOpen(false)}>
              <NavLink to="/order-history" className={({isActive}) => isActive ? "active" : ''}>My Orders</NavLink>
            </li>
          )}
          {currentUser ? (
            <li onClick={() => { logout(); setIsNavOpen(false); }}>
              <button className="logout-button">Logout</button>
            </li>
          ) : (
            <li onClick={() => setIsNavOpen(false)}>
              <NavLink to="/login" className={({isActive}) => isActive ? "active" : ''}>Login</NavLink>
            </li>
          )}
        </ul>
      </nav>
      <div className="hamburger" onClick={() => setIsNavOpen(!isNavOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;