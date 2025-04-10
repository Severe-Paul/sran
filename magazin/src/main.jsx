import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cart from './Cart.jsx'
import ProductList from './ProductList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Cart />
    <ProductList />
  </StrictMode>,
)
