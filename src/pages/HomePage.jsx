import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1>Welcome to Our Store!</h1>
      <p>The best place to find amazing products.</p>
      <Link to="/products">
        <button style={{ marginTop: '20px', padding: '10px 20px', fontSize: '1em' }}>
          Shop Now
        </button>
      </Link>
    </div>
  );
}

export default HomePage;