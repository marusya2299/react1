import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product.jsx'
// src/App.jsx
export default function App() {
  return (
    <div>
      <h1>Products</h1>

      <Product />
      <Product />
      <Product />
    </div>
  );
}
