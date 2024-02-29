import React from 'react';
import './App.css';
import AddProduct from './Action/AddProduct';
import CartDisplay from './components/CartDisplay'; // Make sure the path matches your file structure

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddProduct />
        <CartDisplay />
      </header>
    </div>
  );
}

export default App;
