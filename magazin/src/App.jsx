import { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import './App.css';

function App() {
  const [products] = useState([
    { id: 1, name: 'Ноутбук', price: 50000, image: 'laptop.jpg' },
    { id: 2, name: 'Смартфон', price: 30000, image: 'phone.jpg' },
    { id: 3, name: 'Наушники', price: 5000, image: 'headphones.jpg' }
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <div className="app">
      <header>
        <h1>Мини-магазин</h1>
      </header>
      <main>
        <ProductList products={products} onAddToCart={addToCart} />
        <Cart items={cartItems} onRemove={removeFromCart} />
      </main>
    </div>
  );
}

export default App;