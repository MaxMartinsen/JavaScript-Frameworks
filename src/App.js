import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('useEffect has run');
  }, [counter]); // No dependency array

  function onIncrementCounter() {
    setCounter(counter + 1);
  }

  function onDecrementCounter() {
    setCounter(counter - 1);
  }

  console.log('Component has rendered');
  return (
    <div className="App">
      <header className="App-header">
      <div>Counter: {counter}</div>
      <button onClick={onIncrementCounter}>+</button>
      <button onClick={onDecrementCounter}>-</button>
      </header>
    </div>
  );
}

export default App;
