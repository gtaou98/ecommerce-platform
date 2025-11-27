import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage'; // Import CartPage
import './App.css';

function Layout() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Outlet /> {/* This is where the page content will be rendered */}
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="cart" element={<CartPage />} /> {/* Add route for CartPage */}
      </Route>
    </Routes>
  );
}

export default App;