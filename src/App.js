import './App.css';
import React, {useReducer} from 'react';

const product = [
  {
    id: 1,
    title: 'Milk',
    price: 19.99,
    discountedPrice: 19.99,
  },
  {
    id: 2,
    title: 'Bread',
    price: 12.99,
    discountedPrice: 12.99,
  },
  {
    id: 3,
    title: 'Cheese',
    price: 25.99,
    discountedPrice: 25.99,
  },
];

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'addProduct':
      // Check if the item is already in the cart
      const itemInCart = state.find(item => item.id === action.payload.id);
      if (itemInCart) {
        // Increase quantity if item already exists
        return state.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new item to cart with quantity = 1
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case 'removeProduct':
      const itemToRemove = state.find(item => item.id === action.payload.id);
      if (itemToRemove.quantity > 1) {
        // Decrease quantity if more than one
        return state.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        // Remove item from cart if quantity is 1
        return state.filter(item => item.id !== action.payload.id);
      }
    case 'clearCart':
      // Empty the cart
      return [];
    default:
      return state;
  }
};

function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);
  
  const addItemToCart = (item) => {
    dispatch({ type: 'addProduct', payload: item });
  };

  const removeItemFromCart = (itemId) => {
    dispatch({ type: 'removeProduct', payload: { id: itemId } });
  };

  const resetCart = () => {
    dispatch({ type: 'clearCart' });
  };

  // Calculate total cost
  const totalCost = cart.reduce((total, item) => {
    return total + (item.discountedPrice * item.quantity);
  }, 0); // Start accumulating from 0
  return (
    <div className="App">
      <header className="App-header">
      <h1>Shopping Cart</h1>
      <div>
        {product.map(item => (
          <div key={item.id}>
            {item.title} - ${item.price}
            <button onClick={() => addItemToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div>
        <h2>Cart</h2>
        {cart.map(item => (
          <div key={item.id}>
            {item.title} ({item.quantity})
            <button onClick={() => addItemToCart(item)}>+</button>
            <button onClick={() => removeItemFromCart(item.id)}>-</button>
          </div>
        ))}
        <div>Total Cost: ${totalCost.toFixed(2)}</div>
        {cart.length > 0 && (
          <button onClick={resetCart}>Reset Cart</button>
        )}
      </div>
      </header>
    </div>
  );
}

export default App;
