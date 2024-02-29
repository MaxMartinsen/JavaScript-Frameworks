// Assuming you have a file structure similar to what you provided, adjust the import path as necessary
import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../cartSlice';

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

function AddProduct() {
  const dispatch = useDispatch();

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <div>{product.title} - ${product.discountedPrice}</div>
          <button onClick={() => dispatch(addProduct(product))}>Add</button>
        </div>
      ))}
    </div>
  );
}

export default AddProduct;
