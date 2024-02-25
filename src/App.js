import './App.css';

function ProductsList({products}) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title} - ${product.price}</h2>
          <div>{product.isOnSale && <div>ON SALE</div>}</div>
        </div>
      ))}
    </div>
  )
}


function App() {
  const products = [
    { id: 0, title: 'Bread', price: 19.99, isOnSale: true },
    { id: 1, title: 'Milk', price: 29.99, isOnSale: false },
    { id: 2, title: 'Cheese', price: 35.99, isOnSale: false },
    { id: 3, title: 'Water', price: 15.99, isOnSale: true },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div>
        <ProductsList products={products} />
        </div>
      </header>
    </div>
  );
}

export default App;
