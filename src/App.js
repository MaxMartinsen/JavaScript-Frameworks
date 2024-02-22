import './App.css';

function App() {
  function onButtonClick() {
    console.log('Button clicked!');
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
      <button onClick={onButtonClick}>Click me</button>
    </div>
      </header>
    </div>
  );
}

export default App;
