import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";
import Products from './pages/Products';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        <Products />
      </Routes>
    </BrowserRouter>
  );
}

export default App
