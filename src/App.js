import React from 'react';
import './App.css';
import Header from './components/AppBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import ProductDetails from './components/productDetails';
import ProductCart from './components/ProductCart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

function App() {
  const [input, setInput]=React.useState('')
  return (
    <>
      <div>
      <Router> 
        <Header input={input} setInput={setInput}/>
        <Routes>
          <Route path='/' element={<Products input={input} setInput={setInput}/>} />
          <Route path='/products/:id' element={<ProductDetails/>}/>
          <Route path='/products/cart' element={<ProductCart/>}/>
          <Route path='/checkout/:id' element={<Checkout/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
    </>
  );
}

export default App;
