import './App.css';
import { useState } from 'react';


function Product({ productName }) {
  return (
    <div>
      {productName.type} 
    </div>
  )
}

function App() {
  const productList = [
    {
      type: 'Melk'
    },
    {
      type: 'Ost'
    }
    
    ]
  const [index, setIndex] = useState(0);
  const hasNext = index < productList.length - 1;
  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  let productName = productList[index];
  return (
    <div className="App">
      <header className="App-header">
      <div>
      <Product productName = {productName}/>
      <button onClick={handleNextClick}>
        Next
      </button>
      </div>
      </header>
    </div>
  );
}

export default App;
