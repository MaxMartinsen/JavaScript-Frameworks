import './App.css';
import { useState } from "react";

function Product({title}) {
  return (
    <div>{title}</div>
  )
}

function App() {

  const [productTitle, setProductTitle] = useState('Milk')

  function onButtonClick() {
    setProductTitle('Cheese')
  }

  return (
    <div className="App">
      <header className="App-header">
        <Product title={productTitle}/>
        <button onClick={onButtonClick}>Next</button>
      </header>
    </div>
  );
}

export default App;
