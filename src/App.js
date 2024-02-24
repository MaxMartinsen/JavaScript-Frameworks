import './App.css';

function ProductList({productsMap}) {
  return (
    <div>
    {productsMap.map((product) => (
      <div key={product.id}>
        <h2>{product.title}</h2>
        <p>${product.price}</p>
      </div>
    ))}
  </div>
  )
}

function App() {

  const products = [
    { id: 0, title: 'Bread', price: 19.99 },
    { id: 1, title: 'Milk', price: 29.99 },
    { id: 2, title: 'Cheese', price: 35.99 },
    { id: 3, title: 'Water', price: 15.99 },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <ProductList productsMap = {products}/>
      </header>
    </div>
  );
}

export default App;
