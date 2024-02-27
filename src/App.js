import './App.css';
import React, { createContext, useContext } from 'react';

const products = [
  { id: 0, title: 'Bread', price: 19.99 },
  { id: 1, title: 'Milk', price: 29.99 },
  { id: 2, title: 'Cheese', price: 35.99 },
  { id: 3, title: 'Water', price: 15.99 },
];

const ProductContext = createContext();

function App() {
  return (
    <ProductContext.Provider value={products}>
      <div className='App'>
        <header className='App-header'>
          <div>
            <Products />
          </div>
        </header>
      </div>
    </ProductContext.Provider>
  );
}

function Products() {
  const productsFromContext = useContext(ProductContext);
  return (
    <div>
      <ul>
        {productsFromContext.map((product) => (
          <li key={product.id}>{product.title}: ${product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
