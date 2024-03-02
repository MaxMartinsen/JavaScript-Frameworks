import './App.css';
import React, { useEffect, useState } from 'react';

const url = 'https://v2.api.noroff.dev/online-shop'; // Adjusted endpoint to match documentation

function App() {
  const [products, setProducts] = useState([]); // Changed from setPosts to setProducts for clarity
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setProducts(json.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setIsLoading(false);
        setIsError(true);
      }
    }

    getData();
  }, []);

  if (isLoading) {
    return <div>Loading products...</div>; 
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price} Nok</p>
            <p>Discounted Price: {product.discountedPrice} Nok</p>
            <img src={product.image.url} alt={product.image.alt || 'Product image'} />
            <p>Rating: {product.rating}</p>
            <p>Tags: {product.tags.join(', ')}</p>
            <h3>Reviews:</h3>
            <ul>
              {product.reviews.map((review) => (
                <li key={review.id}>
                  {review.username} ({review.rating}): {review.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
