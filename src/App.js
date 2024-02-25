import './App.css';
import { useState } from 'react';

function App() {
  const [isActive, setIsActive] = useState(true);

  function onButtonClick() {
    setIsActive(currentState => !currentState);
  }
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={onButtonClick}>Toggle</button>
      <div>{isActive ? <div>I am active</div> : <div>I am not active</div>}</div>
      </header>
    </div>
  );
}

export default App;
