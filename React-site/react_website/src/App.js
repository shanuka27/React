import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Product from './components/pages/Product';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/Product' element={<Product />} />
            <Route path='/SignUp' element={<SignUp />} />
          </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
