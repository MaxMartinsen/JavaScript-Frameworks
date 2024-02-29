import React from 'react';
import { useSelector } from 'react-redux';
import { clearCart } from '../cartSlice';
import { useDispatch } from 'react-redux';

function CartDisplay() {
  const cart = useSelector((state) => state.cart.products);
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Basket</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.title} - ${item.discountedPrice}</li>
        ))}
      </ul>
      <div>Total: ${cartTotal.toFixed(2)}</div>
      <button onClick={() => dispatch(clearCart())}>Clear</button>
    </div>
  );
}

export default CartDisplay;