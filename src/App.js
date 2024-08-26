
import './App.css';
import { NavBar } from './components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './pages/Shop.jsx';
import { ShopCategory } from './pages/ShopCategory.jsx';
import { Product } from './pages/Product.jsx';
import { Cart } from './pages/Cart.jsx';
import { LoginSignup } from './pages/LoginSignup.jsx';

function App() {
  return (
    <div >
      <BrowserRouter >
        <NavBar />
        <Routes >
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category="men" />} />
          <Route path='/womens' element={<ShopCategory category="womens" />} />
          <Route path='/kids' element={<ShopCategory category="kids" />} />

          <Route path='/product' element={<Product />} />
          <Route path=':productId' element={<Product />} />
          <Route />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes >
      </BrowserRouter >
    </div>
  );
}

export default App;
