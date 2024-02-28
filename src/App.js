import React from 'react';
import './App.css';
import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

const useCartStore = createWithEqualityFn((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  clearCart: () => set({ cart: [] }),
}));


const products = [
  {
    id: 0,
    title: 'Milk',
    price: 19.99,
    discountedPrice: 19.99,
  },
  {
    id: 1,
    title: 'Bread',
    price: 12.99,
    discountedPrice: 12.99,
  },
  {
    id: 2,
    title: 'Cheese',
    price: 25.99,
    discountedPrice: 25.99,
  },
];

function App() {
  const { cart, addToCart, clearCart } = useCartStore((state) => ({
    cart: state.cart,
    addToCart: state.addToCart,
    clearCart: state.clearCart,
  }), shallow);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Products</h2>
        {products.map((product) => (
          <div className='App-product' key={product.id}>
            {product.title} - ${product.discountedPrice}
            <button className='App-button' onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
        <h2>Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.title} - ${item.discountedPrice}</li>
          ))}
        </ul>
        {cart.length > 0 && (
          <button onClick={clearCart}>Clear Cart</button>
        )}
      </header>
    </div>
  );
}

export default App;
