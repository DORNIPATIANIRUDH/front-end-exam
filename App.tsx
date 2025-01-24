import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ChatBot } from './components/ChatBot';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Receipt } from './pages/Receipt';
import { Login } from './pages/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/receipt" element={<Receipt />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;