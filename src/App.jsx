import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Collection from './pages/Collection';
import About from './pages/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';

const App = () => {
  return (
    <div>
      <Navbar />
      <Searchbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart/>}/>
        {/* other routes */}
      </Routes>

      <Footer />
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default App;
